import React, { Component } from 'react';
import { connect } from 'react-redux';

import { readEvents } from '../actions'

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
  componentDisMount() {
    // componentがマウントされたタイミングでreadEventsでイベントを全県取得してきたい
    this.props.readEvents()
  }
// constructorでやってることはReducerでやることになるので不要
  render() {
    const props = this.props
    return( 
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={ props.increment }>+1</button>
        <button onClick={ props.decrement }>-1</button>
      </React.Fragment>
     )
  }
}

// stateをpropsとしてmappingする
const mapStateToProps = state => ({ })

// incrementまたはdecrementをkeyにi
// ncrement関数またはdecrement関数をpropsとして持つ
const mapDispatchToProps = dispatch => ({
  // incrementがkeyで、increment関数が引数として与えられているdispatch関数
  readEvents: () => dispatch(readEvents()),
})

// 省略した書き方
// const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

 