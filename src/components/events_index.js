import React, { Component } from 'react';
import { connect } from 'react-redux';

import { readEvents } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <label htmlFor='bar'>bar</label>
//         <input type='text' onChange={() => {console.log('changed')}}></input>
//       </div>
//     )
//   }
// }

// 一文ならreturnと{}を省略可なアロー関数で書く場合はこちら
// const App = () => ( <Counter/> )

 
class EventsIndex extends Component {
  componentDidMount() {
    // componentがマウントされたタイミングでreadEventsでイベントを全県取得してきたい
    // 具体的な処理はActionsに書く
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      // 一意のkeyを渡す必要
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }
// constructorでやってることはReducerでやることになるので不要
  render() {
    return( 
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
        <Link to='events/new'>New Event</Link>
      </React.Fragment>
     )
  }
}

// stateをpropsとしてmappingする
// state.eventsには、reducerで整形した結果のevent一覧が返ってきている
const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = dispatch => ({
  readEvents: () => dispatch(readEvents()),
})

// 省略した書き方
// const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

 