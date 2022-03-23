import React from 'react';
import classes from './Tutorial.module.css'
import TextWrapper from "../../Component/TextWrapper/TextWrapper";

const Tutorial = () => {
    return (
        <div className={classes.Tutorial}>
            <div className={classes.Text}>
                <TextWrapper>

                </TextWrapper>
            </div>
            <div className={classes.TutorialCard}>

            </div>
        </div>
    );
};

export default Tutorial;