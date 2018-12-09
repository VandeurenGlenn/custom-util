import resolve from 'rollup-plugin-node-resolve';
import cjs from 'rollup-plugin-commonjs';

export default [{
  input: 'src/index.js',
  output: [{
    file: 'index.js',
    format: 'cjs'
  }, {
    file: 'browser.js',
    format: 'iife',
    name: 'customUtils'
  }],
  plugins: [
    cjs(),
    resolve()
  ]
}]
