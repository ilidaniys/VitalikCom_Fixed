import React from 'react';
import classes from './Gallery.module.css'
import img1 from './index.webp'
import Card from "./Card/Card";

const Gallery = () => {
    return (
        <div className={classes.Gallery}>
            <div className={classes.Background}/>
            <h1>TESTIMONIALS</h1>
            <div className={classes.CardWrapper}>
                <Card
                    img={img1}
                    name={'Alex Minets'}
                    postCompany={'CTO'}
                >

                    This section should include a wide selection of developers that are available to hire
                    across multiple specialties and technologies. Later, we'll create separate landing pages for
                    each.This section should include a wide selection of developers that are available to hire across
                    multiple specialties and technologies. Later, we'll create separate landing pages for each.</Card>
                <Card
                    img={img1}
                    name={'Alex Minets'}
                    postCompany={'CTO'}
                >

                    This section should include a wide selection of developers that are available to hire
                    across multiple specialties and technologies. Later, we'll create separate landing pages for
                    each.This section should include a wide selection of developers that are available to hire across
                    multiple specialties and technologies. Later, we'll create separate landing pages for each.</Card>
                <Card
                    img={img1}
                    name={'Alex Minets'}
                    postCompany={'CTO'}
                >

                    This section should include a wide selection of developers that are available to hire
                    across multiple specialties and technologies. Later, we'll create separate landing pages for
                    each.This section should include a wide selection of developers that are available to hire across
                    multiple specialties and technologies. Later, we'll create separate landing pages for each.</Card>
            </div>
        </div>
    );
};

export default Gallery;