

function decode_fp_value2(s, opt) {
  // sample JS code to decode a IEEE754 floating point value from a Unicode string.
  //
  // With provision to detect +0/-0 and +/-Inf and NaN
  //
  opt = opt || { consumed_length: 0 };
  var idx = opt.consumed_length;
  opt.consumed_length++;

  var c0 = s.charCodeAt(idx);
  //console.log('decode task: ', s, s.length, c0, '0x' + c0.toString(16));

  // As we expect most encodings to be regular numbers, those will be in 0x0000..0x7FFF and
  // we don't want to spend the least amount of time in the 'special values' overhead,
  // which would be added overhead if we did check for those *first* instead of at the *same time*
  // as we do here by looking at the top nibble immediately:
  switch (c0 & 0xF000) {
  // This range includes the Unicode extended character ranges ('Surrogates') and MUST NOT be used by us for 'binary encoding'
  // purposes as we would than clash with any potential Unicode validators out there! The key of the current
  // design is that the encoded output is, itself, *legal* Unicode -- though admittedly I don't bother with
  // the Unicode conditions surrounding shift characters such as these:
  // 
  // which reside in the other ranges that we DO employ for our own nefarious encoding purposes!
  // 
  // By the way: do note that the clash-potential is for the Surrogates range 0xD800-0xDFFF hence 
  // 0xD000-0xD7FF (2K) *is* at least theoretically available for our encoding. And we DO use them now
  // for encoding floating point 'special values'.
  case 0xD000:
    // specials:
    switch (c0) {
    case FPC_ENC_POSITIVE_ZERO:
      return 0;

    case FPC_ENC_NEGATIVE_ZERO:
      return -0;

    case FPC_ENC_POSITIVE_INFINITY:
      return Infinity;

    case FPC_ENC_NEGATIVE_INFINITY:
      return -Infinity;

    case FPC_ENC_NAN:
      return NaN;

    default:
      throw new Error('illegal fp encoding value in 0xDXXX unicode range');
    }
    break;

  case 0x8000:
  case 0x9000:
  case 0xA000:
  case 0xB000:
  case 0xC000:
    // 'human values' encoded as 'short floats':
    //
    // Bits in word:
    // - 0..9: integer mantissa; values 0..1023
    // - 10: sign
    // - 11..14: exponent 0..9 with offset -3 --> -3..+6
    // - 15: set to signal special values; this bit is also set for some special Unicode characters,
    //       so we can only set this bit and have particular values in bits 0..14 at the same time
    //       in order to prevent a collision with those Unicode specials at 0xD800..0xDFFF.
    //
    var dm = c0 & 0x03FF;      // 10 bits
    var ds = c0 & 0x0400;      // bit 10 = sign
    var dp = c0 & 0x7800;      // bits 11..14: exponent

    //console.log('decode-short-0', ds, dm, '0x' + dp.toString(16), dp >>> 11, c0, '0x' + c0.toString(16));
    dp >>>= 11;
    dp -= 3 + 2;

    var sflt = dm * Math.pow(10, dp);
    if (ds) {
      sflt = -sflt;
    }
    //console.log('decode-short-1', sflt, ds, dm, dp, c0, '0x' + c0.toString(16));
    return sflt;

  // (0xF800..0xFFFF: reserved for future use)
  case 0xE000:
  case 0xF000:
    // 'human values' encoded as 'short floats':
    //
    // Bits in word:
    // - 0..9: integer mantissa; values 0..1023
    // - 10: sign
    // - 11..14: exponent 10..12 with offset -3 --> 7..9
    // - 15: set to signal special values; this bit is also set for some special Unicode characters,
    //       so we can only set this bit and have particular values in bits 0..14 at the same time
    //       in order to prevent a collision with those Unicode specials at 0xD800..0xDFFF.
    //
    var dm = c0 & 0x03FF;      // 10 bits
    var ds = c0 & 0x0400;      // bit 10 = sign
    var dp = c0 & 0x7800;      // bits 11..14: exponent

    //console.log('decode-short-0C', ds, dm, '0x' + dp.toString(16), dp >>> 11, c0, '0x' + c0.toString(16));
    dp >>>= 11;
    dp -= 3 + 2 + 2;            // like above, but now also compensate for exponent bumping (0xA --> 0xC, ...)
    if (dp > 12) {
      throw new Error('illegal fp encoding value in 0xF8XX-0xFFXX unicode range');
    }

    var sflt = dm * Math.pow(10, dp);
    if (ds) {
      sflt = -sflt;
    }
    //console.log('decode-short-1C', sflt, ds, dm, dp, c0, '0x' + c0.toString(16));
    return sflt;

  default:
    // 'regular' floating point values:
    //
    // Bits in word:
    // - 0..11: exponent; values -1024..+1023 with an offset of 1024 to make them all positive numbers
    // - 12: sign
    // - 13,14: length 1..4: the number of words following to define the mantissa
    // - 15: 0 (zero)
    //
    var len = c0 & 0x6000;
    var vs = c0 & 0x1000;
    var p = c0 & 0x0FFF;

    p -= 1024;
    //console.log('decode-normal-0', vs, p, len, '0x' + len.toString(16), c0, '0x' + c0.toString(16));

    // we don't need to loop to decode the mantissa: we know how much stuff will be waiting for us still
    // so this is fundamentally an unrolled loop coded as a switch/case:
    var m;
    var im;
    // no need to shift len before switch()ing on it: it's still the same number of possible values anyway:
    switch (len) {
    case 0x0000:
      // 1 more 15-bit word:
      idx++;
      im = s.charCodeAt(idx);
      m = im / FPC_ENC_MODULO;
      opt.consumed_length++;
      //console.log('decode-normal-len=1', m, s.charCodeAt(1));
      break;

    case 0x2000:
      // 2 more 15-bit words:
      idx++;
      im = s.charCodeAt(idx);
      im <<= 15;
      idx++;
      im |= s.charCodeAt(idx);
      m = im / (FPC_ENC_MODULO * FPC_ENC_MODULO);
      opt.consumed_length += 2;
      //console.log('decode-normal-len=2', m, s.charCodeAt(1), s.charCodeAt(2));
      break;

    case 0x4000:
      // 3 more 15-bit words: WARNING: this doesn't fit in an *integer* of 31 bits any more,
      // so we'll have to use floating point for at least one intermediate step!
      //
      // Oh, by the way, did you notice we use a Big Endian type encoding mechanism?  :-)
      idx++;
      im = s.charCodeAt(idx);
      m = im / FPC_ENC_MODULO;
      idx++;
      im = s.charCodeAt(idx);
      im <<= 15;
      idx++;
      im |= s.charCodeAt(idx);
      m += im / (FPC_ENC_MODULO * FPC_ENC_MODULO * FPC_ENC_MODULO);
      opt.consumed_length += 3;
      //console.log('decode-normal-len=3', m, s.charCodeAt(1), s.charCodeAt(2), s.charCodeAt(3));
      break;

    case 0x6000:
      // 4 more 15-bit words, where the last one doesn't use all bits. We don't use
      // those surplus bits yet, so we're good to go when taking the entire word
      // as a value, no masking required there.
      //
      // WARNING: this doesn't fit in an *integer* of 31 bits any more,
      // so we'll have to use floating point for at least one intermediate step!
      idx++;
      im = s.charCodeAt(idx);
      im <<= 15;
      idx++;
      im |= s.charCodeAt(idx);
      m = im / (FPC_ENC_MODULO * FPC_ENC_MODULO);
      idx++;
      im = s.charCodeAt(idx);
      im <<= 15;
      idx++;
      im |= s.charCodeAt(idx);
      m += im / (FPC_ENC_MODULO * FPC_ENC_MODULO * FPC_ENC_MODULO * FPC_ENC_MODULO);
      opt.consumed_length += 4;
      //console.log('decode-normal-len=4', m, s.charCodeAt(1) / FPC_ENC_MODULO, s.charCodeAt(1), s.charCodeAt(2), s.charCodeAt(3), s.charCodeAt(4));
      break;
    }
    //console.log('decode-normal-1', vs, m, p, opt.consumed_length);
    m *= Math.pow(2, p);
    m *= 2;                       // we do this in two steps to allow handling even the largest floating point values, which have p=1023: Math.pow(2, p+1) would fail for those!
    if (vs) {
      m = -m;
    }
    //console.log('decode-normal-2', m);
    return m;
  }
}





console.info('fpcvt-alt4 loaded');
