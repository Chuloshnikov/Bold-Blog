import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = props.messages.map( message => <Message message={message.message} />);
    
    let newMessage = React.createRef();

let addMessage = () => {
    props.addMessage();
}

let onMessageChange = () => {
    let text = newMessage.current.value;
    props.ubdateNewMessageText(text);
}

    return (
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messagesContainer}>
                    <div className={styles.messages}>
                        {messagesElements}
                        <div>
                            <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText}/>
                            <button onClick={addMessage}>add message</button>
                        </div>
                    </div>    
                </div>
            </div>
    )
}

export default Dialogs;