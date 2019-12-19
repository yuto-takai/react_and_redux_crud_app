import React, { Component } from 'react';

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

// Class Component ↓

function App() { 
  return <Counter/> 
}

// 一文ならreturnと{}を省略可なアロー関数で書く場合はこちら
// const App = () => ( <Counter/> )

 
class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 } 
  }


  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return( 
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={ this.handlePlusButton }>+1</button>
        <button onClick={ this.handleMinusButton }>-1</button>
      </React.Fragment>
     )
  }
}
 
export default App;

 