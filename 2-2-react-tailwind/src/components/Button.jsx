import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    text: PropTypes.string.isRequired,
    buttonStyle: PropTypes.string
};

export default function Button(props) {
    const {buttonStyle = 'text', text, onClick} = props;

    let style = '';

    switch(buttonStyle) {
        case 'text': {
            style = 'material-button-text';
        } break;
        case 'outline': {
            style = 'material-button-outline';
        } break;
        case 'contained': {
            style = 'material-button-contained';
        } break;
        default: {
            style = 'material-button-text';
        } break;
    }

    return (
        <button className={`material-button ${style}`} onClick={onClick}>{text}</button>
    );
}

Button.propTypes = propTypes;