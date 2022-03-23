import React from 'react';
import classes from './FormWrapper.module.css'
import TextWrapper from "../../Component/TextWrapper/TextWrapper";
import Form from "./Form/Form";

const FormWrapper = () => {
    return (
        <div className={classes.FormWrapper}>
            <div className={classes.Form}>
                <TextWrapper>
                    <h1> Let’s talk about your <br/>
                        <span> product plan and requirements - </span>
                        <br/> it deserves to be awesome!
                    </h1>
                </TextWrapper>
                <Form>
                </Form>
            </div>
            <div className={classes.Background}/>
        </div>
    );
};

export default FormWrapper;