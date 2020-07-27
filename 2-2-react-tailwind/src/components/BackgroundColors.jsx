import React from 'react';

export default function BackgroundColors() {
    return (
        <div>
            { /* Divs are BLOCK elements */}
            <div className="bg-blue-500 text-3xl">
                First
            </div>
            <br />
            {/* We can change the behavior by adding the element type
                Example: inline
                */}
            <div className="bg-blue-500">
                Second
            </div>
            <label>Here is some text...</label>
            <button className="bg-green-500 p-4">Click Me</button>
            <a className="bg-red-300">This is a link...</a>
            <p className="bg-gray-600">This is a paragraph</p>
            <p className="bg-gray-600">This is an other paragraph</p>
        </div>
    );
}