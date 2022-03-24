import React from 'react';
import classes from './FormWrapper.module.css'
import Form from "./Form/Form";
import TitleWrapper from "./TitleWrapper/TitleWrapper";
import Phone from "./Phone/Phone";

const FormWrapper = () => {
    return (
        <div className={classes.FormWrapper}>
            <div className={classes.TitleWrapper}>
                <TitleWrapper/>
            </div>
            <div className={classes.Form}>
                <Form>
                </Form>
            </div>
            <div className={classes.PhoneWrapper}>
                <Phone type={'left'}/>
                {/*<Phone type={'right'}/>*/}
            </div>
            <div className={classes.Background}/>
        </div>
    );
};

export default FormWrapper;