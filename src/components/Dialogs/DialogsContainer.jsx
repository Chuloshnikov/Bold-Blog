import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
debugger
    let state = props.store.getState().dialogsPage;
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

    return ( < Dialogs 
        updateNewMessageBody={onNewMessageChange} 
        sendMessage={onSendMessageClick}
        dialogsPage={state}
    />)
}

export default DialogsContainer;