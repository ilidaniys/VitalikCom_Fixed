import React from 'react';
import classes from './Phone.module.css'

const Phone = (props) => {
    const cls = [
        classes.PhoneWrapper,
        classes[props.type]
    ]
    return (
        <div className={cls.join(' ')}>
            <div className={classes.Phone}>
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
        </div>
    );
};

export default Phone;