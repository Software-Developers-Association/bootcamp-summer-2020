import React from 'react';

function Tweet(props) {
    return (
        <div>
            <img src={props.profile_url} alt={props.name} width="100" height="100" />
            <label>{props.name}</label>
            <p>{props.tweet.text}</p>
        </div>
    );
}

export default Tweet;