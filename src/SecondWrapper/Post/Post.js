import React from 'react';
import classes from  './Post.module.css'

const Post = () => {
    return (
        <div className={classes.Post}>
            <div className={classes.HeadPost}>
                <div className={classes.NumberPost}>

                </div>
            </div>
            <div className={classes.BotPost}>

            </div>
        </div>
    );
};

export default Post;