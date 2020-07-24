import React, { useState } from 'react';
import FollowClass from './FollowClass';
import FollowFunc from './FollowFunc';

export default function ClassVFunc(props) {
    const [ user, setUser ] = useState(props.name);

    return (
        <div>
            <label>
                <b>Choose Profile to view: </b>
                <select
                    value={user}
                    onChange={(e) => setUser(e.target.value)}>
                    <option value="Alex">Alex</option>
                    <option value="Andrew">Andrew</option>
                    <option value="John">John</option>
                </select>
            </label>
            <h1>Welcome to {user}'s profile</h1>
            <FollowClass user={user} />
            <FollowFunc user={user} />
        </div>
    );
}