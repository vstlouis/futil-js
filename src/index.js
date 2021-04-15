import _ from 'lodash/fp'

// funcs
export * from './conversion'
export * from './collection'
export * from './function'
export * from './string'
export * from './object'
export * from './aspect'
export * from './array'
export * from './logic'
export * from './regex'
export * from './lang'
export * from './lens'
export * from './tree'
export * from './iterators'

// helpers
export * from './convert'

// Math
// ----
export const greaterThanOne = _.lt(1)

// Version
// ----
export const VERSION = global.__VERSION__ || '----v9'

// Allows `import F from 'futil-js'`
// export default {
//   ...conversion,
//   ...collection,
//   ...fn,
//   ...string,
//   ...object,
//   ...aspect,
//   ...array,
//   ...logic,
//   ...regex,
//   ...lang,
//   ...lens,
//   ...tree,
//   ...iterators,
//   greaterThanOne,
//   VERSION,
// }
