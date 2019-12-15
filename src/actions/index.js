// ActionのTypeはReducerでも使うので定数にまとめる
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENt'

// Action Creator
export const increment = () => {
  return {
    // Action
    type: INCREMENT
  }
}

// Action Creator
export const decrement = () => ({
  // Action
  type: DECREMENT
})

