import React from 'react';
import PropTypes from 'prop-types';

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
    { name: 'NoName', age: 0 }
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
 
export default App;

 