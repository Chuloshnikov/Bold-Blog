import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';


let Users = (props) => {
    
    let getUsers = () => {
        if (props.users.length === 0) {
                axios.get("https://reqres.in/api/users?page=2").then(response => {
                    props.setUsers(response.data);
            });
        }
    }
    return <div>
        <button onClick={getUsers}>Get Users</button>
                { 
                    props.users.map( user => <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.avatar} className={styles.userPhoto}/>
                            </div>
                            <div>
                                { user.followed
                                ? <button onClick={() => { props.unfollow(user.id) } } >Unfollow</button> 
                                : <button onClick={() => { props.follow(user.id) } } >Follow</button> 
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.first_Name}</div>
                                <div>{user.last_Name}</div>
                            </span>
                            <span>
                                <div>{user.id}</div>
                                <div>{user.email}</div>
                            </span>
                        </span>
                    </div>)
                }
            </div>
}

export default Users;