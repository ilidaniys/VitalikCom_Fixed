import React from 'react';
import classes from './TextWrapper.module.css'

const TextWrapper = (props) => {
    return (
        <div className={classes.TextWrapper}>
            {props.children}
        </div>
    );
};

export default TextWrapper;