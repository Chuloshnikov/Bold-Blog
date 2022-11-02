import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store}/>
        </div>
    );        
}

export default Profile;