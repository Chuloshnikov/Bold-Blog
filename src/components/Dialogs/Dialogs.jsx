import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogsReducer';


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = state.messages.map( message => <Message message={message.message} />);
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

    return (
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messagesContainer}>
                    <div className={styles.messages}>
                        <div>{messagesElements}</div>
                        <div>
                            <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter your message"/></div>
                            <div><button onClick={onSendMessageClick}>add message</button></div>
                        </div>
                    </div>    
                </div>
            </div>
    )
}

export default Dialogs;