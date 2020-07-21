import React from 'react';

function User(props) {
    return (
        <div>
            <img src={props.profile_url} alt={props.name} width="150" height="150" />
            <button style={{backgroundColor: "#1DA1F2"}}>Follow</button>
            <p>{props.bio}</p>
        </div>
    );
}

export default User;