// reducerをひとまとめにするためのファイル
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form' 
import events from './events'

// combineReducerにreducerを渡す
export default combineReducers({ events, form })

