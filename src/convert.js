import _ from 'lodash/fp'

// mutableConvert
// TODO explain....
const mutableConvert = _.convert({ immutable: false })

export const mutable = {
  extendOn: mutableConvert.extend,
  defaultsOn: mutableConvert.defaults,
  mergeOn: mutableConvert.merge,
  setOn: mutableConvert.set,
  unset: mutableConvert.unset,
  pull: mutableConvert.pull,
  update: mutableConvert.update,
}
// noReargConvert
// TODO explain....
const noReargConvert = _.convert({ rearg: false })

export const noRearg = noReargConvert

// noCapConvert
// TODO explain....
const noCapConvert = _.convert({ cap: false })

export const noCap = {
  mapIndexed: noCapConvert.map,
  findIndexed: noCapConvert.find,
  eachIndexed: noCapConvert.each,
  reduceIndexed: noCapConvert.reduce,
  pickByIndexed: noCapConvert.pickBy,
  mapValuesIndexed: noCapConvert.mapValues,
}
