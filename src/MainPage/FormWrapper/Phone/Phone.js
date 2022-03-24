import React from 'react';
import classes from './Phone.module.css'

const Phone = (props) => {
    const cls = [
        classes.Phone,
        classes[props.type]
    ]
    return (
        <div className={cls.join(' ')}>
                <div className={classes.Display}>
                    <div className={classes.Plank}>
                        <div/>
                    </div>
                    <div className={classes.InnerDisplay}/>
                    <div className={classes.Plank}>
                        <div/>
                    </div>
                </div>
                <div className={classes.But}/>
        </div>
    );
};

export default Phone;