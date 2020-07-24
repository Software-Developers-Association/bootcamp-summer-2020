import React, { Component } from 'react';

export default class FollowClass extends Component {
    render() {
        // closure...by capturing the state for this render...
        const props = this.props;

        const showMessage = () => {
            alert('Followed ' + props.user);
        };
    
        const handleClick = () => {
            // after 3 seconds (3,000 ms) invoke
            // showMessage
    
            setTimeout(showMessage, 3000);
        };

        return (
            <div>
                <button onClick={handleClick}>Follow</button>
                <label>(class)</label>
            </div>
        );
    }
}