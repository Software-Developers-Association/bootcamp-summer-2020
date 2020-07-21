import React from 'react';

export default function TwitchCategory(props) {
    return (
        <div>
            <img src={props.banner} alt={props.name} />
            <label>{props.name}</label>
            <br />
            {
                props.tags.map(tag => {
                    return (
                        <React.Fragment>
                            <label style={{backgroundColor: "grey"}} style={{ border: "2", borderRadius: "50"}}>{tag}</label>
                        </React.Fragment>
                    )
                })
            }
        </div>
    );
}
