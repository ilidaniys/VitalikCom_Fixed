import React from 'react';
import classes from './Form.module.css'
import TextWrapper from "../../Component/TextWrapper/TextWrapper";

const FormWrapper = () => {
    return (
        <div className={classes.FormWrapper}>
            <div className={classes.Form}>
                <TextWrapper>
                    <h1>
                        <span></span>
                    </h1>
                </TextWrapper>

            </div>
            <div className={classes.Background}/>
        </div>
    );
};

export default FormWrapper;