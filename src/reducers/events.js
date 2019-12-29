// Actionのタイプを取り込む
import { READ_EVENTS } from '../actions'

// initialStateにする必要はない、今回は{}
export default (state = {}, action) => {
  switch(action.type) {
    case READ_EVENTS:
      return state
    default:
      return state
  } 
} 

