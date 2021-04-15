// Mutables
// ----------
const mutable = _.convert({ immutable: false })

export const extendOn = mutable.extend
export const defaultsOn = mutable.defaults
export const mergeOn = mutable.merge
export const setOn = mutable.set
export const unset = mutable.unset
export const pull = mutable.pull
export const update = mutable.update
