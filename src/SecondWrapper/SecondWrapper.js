import React from 'react';
import classes from './SecondWrapper.module.css'
import TextWrapper from "../Component/TextWrapper/TextWrapper";


const SecondWrapper = () => {
    return (
        <div className={classes.SecondWrapper}>
            <TextWrapper>
                <h1>
                    HOW
                    <span>
                        QUONTEX
                    </span>
                    CAN HELP YOUR PROJECT
                </h1>
                <p>Trust you can Verify. We know your outsourcing fears. Talk with our clients. Have transparent access
                    to developer metrics.
                    Tap into our proven formula using extended Agile teams to drive your product’s success. Our team
                    specializes in product delivery using today’s cutting-edge technologies - from AI/ML to Big Data and
                    the Cloud.</p>
            </TextWrapper>
        </div>
    );
};

export default SecondWrapper;