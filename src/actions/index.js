// ActionのTypeはReducerでも使うので定数にまとめる
export const READ_EVENTS = 'READ_EVENTS'

// Action Creator
export const readEvents = () => ({
  // Action
  // returnを省略
  type: READ_EVENTS
})

