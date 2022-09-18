import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
debugger;
    let dialogsElements = props.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = props.messages.map( message => <Message message={message.message} />);
    
    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.massages}>
                    {messagesElements}
                </div>
            </div>
    )
}

export default Dialogs;