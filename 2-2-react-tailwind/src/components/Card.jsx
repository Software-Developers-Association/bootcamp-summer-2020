import React from 'react';
import PropTypes from 'prop-types';
import Joi from '@hapi/joi';
import Button from './Button';

const propTypes = {
    // Required
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,

    // Optional
    text: PropTypes.string,
    image: PropTypes.shape(
        {
            url: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        }
    ),
    actions: PropTypes.arrayOf(
        (array, index) => {
            const schema = Joi.object({
                text: Joi.string().required(),
                callback: Joi.function().optional()
            });

            const {error} = schema.validate(array[index]);

            if(error) return error;
        }
    )
};

export default function Card(props) {
    // Object Destructoring the properties in the props
    // JSON object.
    const {heading = "Heading", subheading = "Subheading", text, image, actions} = props;

    return (
        <div className="shadow rounded-md max-w-xs overflow-hidden transform transition ease-out hover:scale-105 duration-300">
            {
                image && <img className="h-48 w-full object-cover" src={image.url} alt={image.alt} />
            }
            <div className="px-4 py-4">
                <h3 className="font-bold text-xl">{heading}</h3>
                <h4 className="text-sm text-gray-500">{subheading}</h4>
                {
                    text && text !== "" && <div className="text-sm text-gray-500 mt-3">{text}</div>
                }
                {
                    actions && actions.length > 0 &&
                    <div className="mt-3 -ml-2 -mb-2 space-x-1">
                        {
                            actions.map((action, index) => {
                                return <Button key={index} onClick={action.callback} buttonStyle="outline" text={action.text} />
                                //return <button key={index} onClick={action.callback} className="material-button">{action.text}</button>
                            })
                        }
                    </div>
                }
            </div>
        </div>
    );
}

Card.propTypes = propTypes;