import React from 'react';
import styles from './ProfileInfo.module.css';
import image from '../../../assets/images/ciber.jpg';

const ProfileInfo = () => {
    return (
        <div>
            <img src={image} alt='background'/>
            <div className={styles.descriptionBlock}>
                avatar + discription
            </div>
        </div>
    )
}

export default ProfileInfo;