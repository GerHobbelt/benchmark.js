// http://perfectionkills.com/global-eval-what-are-the-options/#evaling_in_global_scope

var globalEval = (function () {

  var isIndirectEvalGlobal = (function gonzoGlobalEvalIndirectPlanA(original, Object) {
    try {
      // Does `Object` resolve to a local variable, or to a global, built-in `Object`,
      // reference to which we passed as a first argument?
      return (1, eval)('Object') === original;
    }
    catch (err) {
      // if indirect eval errors out (as allowed per ES3), then just bail out with `false`
      return false;
    }
  })(Object, 123);

  if (isIndirectEvalGlobal) {
    // if indirect eval executes code globally, use it
    return function gonzoGlobalEvalIndirectPlanB(expression) {
      return (1, eval)(expression);
    };
  }
  else if (typeof window !== 'undefined' && typeof window.execScript !== 'undefined') {
    // if `window.execScript exists`, use it
    return function gonzoGlobalEvalExecScriptPlan(expression) {
      return window.execScript(expression);
    };
  }

  // otherwise, globalEval is `undefined` since nothing is returned
})();

