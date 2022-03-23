import React from 'react';
import classes from './Gallery.module.css'
import img1 from './index.webp'
import Card from "./Card/Card";

const Gallery = () => {
    return (
        <div className={classes.Gallery}>
            <div className={classes.Background}/>
            <h1>TESTIMONIALS</h1>
            <Card
                img={img1}
                title={'People'}
            />
        </div>
    );
};

export default Gallery;