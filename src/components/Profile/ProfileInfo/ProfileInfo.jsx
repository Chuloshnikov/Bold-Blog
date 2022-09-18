import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img src='https://cdnb.artstation.com/p/assets/images/images/021/856/307/large/tarmo-juhola-laboratorio2-copy.jpg?1573252751' alt='background'/>
            <div className={classes.descriptionBlock}>
                avatar + discription
            </div>
        </div>
    )
}

export default ProfileInfo;