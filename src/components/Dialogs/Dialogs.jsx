import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> );
    let messagesElements = state.messages.map( message => <Message message={message.message} key={message.id} />);
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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