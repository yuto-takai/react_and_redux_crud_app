// Actionのタイプを取り込む
import { READ_EVENTS, DELETE_EVENT } from '../actions'

import _ from 'lodash'

// initialStateにする必要はない、今回は{}
// stateという名前である必要もない
export default (events = {}, action) => {
  switch(action.type) {
    case READ_EVENTS:
      // ActionCreatorで非同期通信を行ったので、
      // ここにはすでに非同期の結果(レスポンス)が存在する状態
      // 目当てのデータはaction.response.dataで取り出せるが、整形したいので
      // lodashを使い、idがキーのオブジェクトの配列を作る

      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      delete events[action.id] // ここでイベント情報を削除までしている
      return { ...events } // スプレッド演算子で、アップデートされたオブジェクトを返す
    default:
      return events
  } 
} 

