import React from 'react';

export default function Card(props) {
    const {text} = props;

    return (
        <div className="shadow rounded-md max-w-sm overflow-hidden transform transition ease-out hover:scale-105 duration-300">
            <img className="h-48 w-full object-cover" src="https://media3.giphy.com/media/WvuTFk2IN7jxoLVDkP/giphy.gif" alt="resort" />
            <div className="px-4 py-4">
                <h3 className="font-bold text-xl">{props.heading}</h3>
                <h4 className="text-sm text-gray-500">{props.subheading}</h4>
                {
                    text && <div className="text-sm text-gray-500 mt-3">{text}</div>
                }
                <div className="mt-3 -ml-2 -mb-2 space-x-1">
                    <button className="px-2 py-1 hover:bg-purple-100 active:bg-purple-300 focus:bg-purple-200 focus:outline-none text-purple-700 uppercase font-semibold tracking-wider">Action 1</button>
                    <button className="px-2 py-1 hover:bg-purple-100 active:bg-purple-300 focus:bg-purple-200 focus:outline-none text-purple-700 uppercase font-semibold tracking-wider">Action 2</button>
                </div>
            </div>
        </div>
    );
}