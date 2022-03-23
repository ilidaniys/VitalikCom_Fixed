import React from 'react';
import classes from './Card.module.css'

const Card = (props) => {
    return (
        <div className={classes.Card}>
            <div className={classes.Img}>
                <img src={props.img} alt="people"/>
            </div>
            <div className={classes.BodyCard}>
                <div className={classes.BackGroundImg}>""</div>
                <div className={classes.Title}>
                    <h1>{props.name}</h1>
                    <h1>{props.postCompany}</h1>
                </div>
                <p>{props.children}</p>
            </div>
        </div>
    );
};

export default Card;