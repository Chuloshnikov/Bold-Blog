import React from 'react';
import styles from './Users.module.css';
import userIcon from '../../assets/images/userIcon.png';


let Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    debugger
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return (
        <div>
            <div>
                {pages.map( p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={ (event) => { props.onPageChanged(p); }}>{p}</span>
                })}
            </div>

            { 
                props.users.map( user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.picture.large != null ? user.picture.large : userIcon} alt="" className={styles.userPhoto}/>
                    </div>
                    <div>
                            { user.followed
                            ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button> 
                            : <button onClick={() => { props.follow(user.id) }} >Follow</button>
                            }
                    </div>
                </span>
                    <span>
                        <span>
                            <div>Title:{user.name.title}</div>
                            <div>First Name:{user.name.first}</div>
                            <div>Last Name:{user.name.last}</div>
                            <div>Gender: {user.gender}</div>
                        </span>
                        <span>
                            <div>Location: {user.location.street.number} {user.location.street.name}</div>
                            <div>City: {user.location.city}</div>
                            <div>Country: {user.location.country}</div>
                            <div>Email: {user.email}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;