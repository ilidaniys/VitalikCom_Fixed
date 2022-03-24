import React from 'react';
import classes from './FormWrapper.module.css'
import TextWrapper from "../../Component/TextWrapper/TextWrapper";
import Form from "./Form/Form";
import TitleWrapper from "./TitleWrapper/TitleWrapper";

const FormWrapper = () => {
    return (
        <div className={classes.FormWrapper}>
            <div className={classes.Form}>
                <TitleWrapper/>
                <Form>
                </Form>
            </div>
            <div className={classes.Background}/>
        </div>
    );
};

export default FormWrapper;