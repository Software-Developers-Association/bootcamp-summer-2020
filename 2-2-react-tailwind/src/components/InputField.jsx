import React, {useState} from 'react';

export default function InputField(props) {
    return (
        <div className="relative m-10 inline-block h-12 border-b border-black border-opacity-25">
            <input
                className="material-input"
                required
                pattern=".*"
                />
            <label className="material-input-label">
                <span className="px-2">Label</span>
            </label>
            <div className="material-input-underline"></div>
        </div>
    );
}