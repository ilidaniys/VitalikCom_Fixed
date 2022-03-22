import React from 'react';
import classes from './BlockWrapper.module.css'

const BlockWrapper = (props) => {
    return (
        <div>
            <p className={classes.BlockParagraf}> {props.title} </p>
            <div className={classes.BlockWrapper}>
                {props.children}
                <div className={classes.MoreContent}>
                    <div className={classes.Dots}>...</div>
                    <div className={classes.SeeMore}>See More</div>
                </div>
            </div>
        </div>
    );
};

export default BlockWrapper;