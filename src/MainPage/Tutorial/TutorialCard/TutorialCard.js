import React from 'react';
import classes from './TutorialCard.module.css'

const TutorialCard = (props) => {
    return (
        <div className={classes.TutorialCard}>
            <a href="/">
                <div className={classes.TutorialCardImg}>
                    <img src={props.img} alt="tutorial"/>
                    <div/>
                </div>
                <div className={classes.TutorialText}>
                    <h2> {props.title}</h2>
                    <h1>{props.name} <br/> {props.data} </h1>
                    <p>{props.paragraf}</p>
                </div>
            </a>
        </div>
    );
};

export default TutorialCard;