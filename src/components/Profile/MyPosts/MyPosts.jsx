import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

let newPostElement = React.createRef();

let onAddPost = () => {
  props.addPost();
}

let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
}

return (
      <div className={styles.postsBlock}>
        <div>
          <h2>My posts</h2>
          <div>
            <div>
              <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder="Enter your post"/>
            </div>
            <div>
              <button onClick={onAddPost}>Add post</button>
            </div>
          </div>
          <div className={styles.posts}>
              {postsElements}
          </div>
        </div>
    </div> 
    );
}

export default MyPosts;