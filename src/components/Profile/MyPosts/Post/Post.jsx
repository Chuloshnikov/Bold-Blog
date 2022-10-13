import React from 'react';
import styles from './Post.module.css';


const Post = (props) => {

  console.log(props.message);
    return (
            <div className={styles.item}>
              <img src="https://avatarfiles.alphacoders.com/171/thumb-171631.jpg"/>
              {props.message}
              <div>
              
                <span>like {props.likesCount}</span>
              </div>
            </div>
    );
}

export default Post;