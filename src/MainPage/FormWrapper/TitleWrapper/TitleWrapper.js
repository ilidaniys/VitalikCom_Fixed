import React from 'react';
import classes from './TitleWrapper.module.css'

const TitleWrapper = () => {
    return (
        <div className={classes.TitleWrapper}>
            <h1> Let’s talk about your <br/>
                <span>
                    product plan and requirements -
                </span>
               <br/> it deserves to be awesome!
            </h1>
        </div>
    );
};

export default TitleWrapper;