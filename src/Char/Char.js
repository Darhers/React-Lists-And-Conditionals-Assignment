import React from 'react';
import './char.css';

const char = (props) => {
    return (
        <div className="char">
            {props.char}
        </div>
    );
}

export default char;