// reducerをひとまとめにするためのファイル
import { combineReducers } from 'redux'
import events from './events'

// combineReducerにreducerを渡す
export default combineReducers({ events })
