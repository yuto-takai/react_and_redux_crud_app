import React from 'react';

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
  const profiles = [
    { name: 'taro', age: 10 },
    { name: 'john', age: 12 },
    { name: 'NoName' }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>I am {props.name}, and {props.age} years old.</div>
}

User.defaultProps = {
  age: 0
}
 
export default App;

