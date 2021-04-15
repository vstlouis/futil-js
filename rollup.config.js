import path from 'path'
import pkg from './package.json'

export default {
  input: path.join(__dirname, 'src', 'index.js'),
  output: {
    file: path.join(__dirname, 'oo', 'futil-js.js'),
    name: pkg.name,
    format: 'umd',
    sourcemap: true,
    globals: {
      'lodash/fp': '_',
    },
  },
  external: ['lodash/fp'],
}
