import React from 'react';

function Greeting(props) {
    console.log(props)

    return (
        <div>
            <h1>Hello, {props.name} you are {props.age} years old</h1>
            <button onClick={() => props.callback(props.name)}>Click Me</button>
        </div>);
}

// class Greeting extends React.Component {
//     render() {
//     return <h1>Greetings {this.props.name}</h1>
//     }
// }

export default Greeting;