import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";


const MyPosts = (props) => {

let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

let newPostElement = React.createRef();

let addPost = () => {
  //props.addPost();
  props.dispatch(addPostActionCreator());
}

let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.updateNewPostText(text);
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
}

return (
      <div className={styles.postsBlock}>
        <div>
          <h2>My posts</h2>
          <div>
            <div>
              <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
              <button onClick={addPost}>Add post</button>
            </div>
            <div>
              <button>Remove</button>
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