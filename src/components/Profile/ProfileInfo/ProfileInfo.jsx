import React from 'react';
import styles from './ProfileInfo.module.css';
import backgroundImage from '../../../assets/images/ciber.jpg';
import Preloader from '../../common/Preloader/Preloader';
import userIcon from '../../../assets/images/userIcon.png';

const ProfileInfo = (props) => {
    console.log(props.profile);
    if (!props.profile) {
        return <Preloader/>
    }
    
    return (
        <div>
            <img src={backgroundImage} alt='background'/>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.results.picture.large ? props.profile.results.picture.large : userIcon} alt=""/>
                <p>Title: {props.profile.results.name.title}</p>
                <p>FirsName: {props.profile.results.name.firls}</p>
                <p>Lastname: {props.profile.results.name.last}</p>
                <p>Gender: {props.profile.results.gender}</p>
                <p>Location: {props.profile.location.street.number} {props.profile.location.street.name}</p>
                            <p>City: {props.profile.location.city}</p>
                            <p>Country: {props.profile.location.country}</p>
                            <p>Email: {props.profile.email}</p>
                            <p>User ID: {props.profile.id.name}</p>
                            <p>User ID: {props.profile.id.value}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;