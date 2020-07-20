import React from 'react';

function Greeting(props) {
return <h1>Hello, {props.name} you are {props.age} years old</h1>;
}

// class Greeting extends React.Component {
//     render() {
//     return <h1>Greetings {this.props.name}</h1>
//     }
// }

export default Greeting;