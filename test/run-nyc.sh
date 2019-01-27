cd "$(dirname "$0")"
cd ..

NODE_ICU_DATA=./node_modules/full-icu nyc node test/test.js
