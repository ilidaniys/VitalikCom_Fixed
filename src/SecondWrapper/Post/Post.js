import React from 'react';
import classes from  './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.Post}>
            <div className={classes.HeadPost}>
                <p>{props.title}</p>
                <div className={classes.NumberPost}>
                    <p>{props.number}</p>
                </div>
            </div>
            <div className={classes.BotPost}>
                <p>{props.children}</p>
            </div>
        </div>
    );
};

export default Post;