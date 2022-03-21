import React from 'react';
import classes from './Main.module.css'
import headerImage from './header-image.webp'
import Button from "../../Button/Button";

const Main = () => {

    return (
        <>
            <div className={classes.Main}>
                <h1>
                    WE HELP YOU BUILD
                    <p>
                        TECH PRODUCTS
                    </p>
                    SEAMLESSLY
                </h1>
                <p>Getting quality product deliverables to tight deadlines can seem impossible, we help you find talent,
                    build teams and launch products</p>
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
