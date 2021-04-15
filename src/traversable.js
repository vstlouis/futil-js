import _ from 'lodash/fp'

export let isTraversable = x => _.isArray(x) || _.isPlainObject(x)
export let traverse = x => isTraversable(x) && !_.isEmpty(x) && x
