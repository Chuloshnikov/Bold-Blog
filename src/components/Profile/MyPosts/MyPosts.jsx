import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);
    
return (
      <div className={classes.postsBlock}>
        <div>
          <h2>My posts</h2>
          <div>
            <div>
              <textarea></textarea>
            </div>
            <div>
              <button>Add post</button>
            </div>
            <div>
              <button>Remove</button>
            </div>
            
          </div>
          <div className={classes.posts}>
              {postsElements}
          </div>
        </div>
    </div> 
    );
}

export default MyPosts;