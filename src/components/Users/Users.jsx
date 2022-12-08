import React from 'react';
import styles from './Users.module.css';
import userIcon from '../../assets/images/userIcon.png';
import { NavLink } from 'react-router-dom';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
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
                props.users.map( user => <div key={user.id.value}>
                <span>
                    <div>
                        <NavLink to={'./../profile/*' + user.id.value}>
                            <img src={user.picture.large != null ? user.picture.large : userIcon} alt="" 
                            className={styles.userPhoto}/>
                        </NavLink>
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
                            <div>First Name:{user.name.first}</div>
                            <div>Last Name:{user.name.last}</div>
                            <div>Gender: {user.gender}</div>
                        </span>
                        <span>
                            <div>Country: {user.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;