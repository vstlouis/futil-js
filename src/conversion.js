import _ from 'lodash/fp'
import { aspects } from './aspect'
import { mutable, noRearg, noCap } from './convert'

// Flips
// ----------
export const getIn = noRearg.get
export const hasIn = noRearg.has
export const pickIn = noRearg.pick
export const includesIn = noRearg.includes
export const inversions = _.mapKeys(k => `${k}In`, noRearg)
// Curry required until https://github.com/lodash/lodash/issues/3440 is resolved
export const unsetOn = _.curryN(2, mutable.unset)
export const pullOn = mutable.pull
export const updateOn = mutable.update

// Uncaps
// ------
// Un-prefixed Deprecated
export const reduce = aspects.deprecate(
  'reduce',
  '1.28.0',
  'reduceIndexed'
)(noCap.reduce)
export const mapValues = aspects.deprecate(
  'mapValues',
  '1.28.0',
  'mapValuesIndexed'
)(noCap.mapValues)
export const each = aspects.deprecate(
  'each',
  '1.28.0',
  'eachIndexed'
)(noCap.each)
