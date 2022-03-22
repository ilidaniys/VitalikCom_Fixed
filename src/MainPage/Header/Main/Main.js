import React from 'react';
import classes from './Main.module.css'
import headerImage from './header-image.webp'
import Button from "../../../Component/Button/Button";
import TextDecoration from "./TextDecoration/TextDecoration";

const Main = () => {

    return (
        <>
            <div className={classes.Main}>
                <TextDecoration/>
                <img src={headerImage} alt="header-image"/>
                <div className={classes.ButtonWrapper}>
                    <Button type={'MainUpButton'}>
                        See More
                    </Button>
                    <div className={classes.positionHeaderButton}>
                    <Button type={'MainDownButton'}>
                        Contact Us
                    </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
