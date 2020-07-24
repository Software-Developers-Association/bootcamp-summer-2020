import React, {useState} from 'react';

export default function State(props) {
    const [ number,  setNumber] = useState(props.number);

    return (
        <div>
            <label>Number {number}</label>
            <button onClick={() => setNumber(number + 1)}>+</button>
            <button onClick={() => setNumber(number - 1)}>-</button>
        </div>
    );
}

// export default class State extends Component {
//     constructor() {
//         super();

//         // Initialize the state.
//         this.state = {
//             number: 0
//         };
//     }

//     add(number) {
//         this.setState({
//             number: this.state.number + number
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <label>Number: </label>
//                 <label>{this.state.number}</label>
//                 <button onClick={ () => this.add(1) }>+</button>
//                 <button onClick={ () => this.add(-1) }>-</button>
//             </div>
//         );
//     }
// }