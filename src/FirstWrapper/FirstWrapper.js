import React from 'react';
import classes from './FirstWrapper.module.css'
import img1 from './1_telefonica.webp'
import img2 from './2_gismart.webp'
import img3 from './3_location.webp'
import img4 from './4_maddict.webp'
import Button from "../Button/Button";

const FirstWrapper = (props) => {
    return (
        <div className={classes.FirstWrapper}>
            <div className={classes.ImgWrapper}>
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
                <img src={img4} alt=""/>
            </div>
            <div className={classes.Background}/>
            <div className={classes.ButtonWrapper}>
                <Button type={'MainDownButton'}> learn more</Button>
            </div>
        </div>
    );
};

export default FirstWrapper;