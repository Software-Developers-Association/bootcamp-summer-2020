import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    iconStart: PropTypes.object,
    iconEnd: PropTypes.object
};

export default function InputField(props) {
    const { iconStart:IconStart = undefined, iconEnd:IconEnd = undefined } = props;

    const additionalInputContainerClasses = `${IconStart ? 'material-input-with-icon-start': ''} ${IconEnd ? 'material-input-with-icon-end' : ''}`;

    return (
        <div className={`material-input-container ${additionalInputContainerClasses}`}>
            {
                IconStart && <IconStart className="material-input-icon material-input-icon-start" />
            }
            {
                IconEnd && <IconEnd className="material-input-icon material-input-icon-end" />
            }
            <input className="material-input" required pattern=".*" />
            <label className="material-input-label">
                <span className="material-input-label-inner">
                    Label
                </span>
            </label>
            <div className="material-input-border"></div>
        </div>
    );
}

InputField.propTypes = propTypes;