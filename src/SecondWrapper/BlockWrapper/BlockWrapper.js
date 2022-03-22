import React from 'react';
import classes from './BlockWrapper.module.css'

const BlockWrapper = (props) => {
    return (
        <div>
            <p> {props.title}</p>
            <div className={classes.BlockWrapper}>
                {props.children}
                <div>
                </div>
            </div>
        </div>
    );
};

export default BlockWrapper;