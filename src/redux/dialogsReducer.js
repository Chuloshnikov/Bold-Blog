const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Howdy!'},
        {id: 2, message: 'Do you know about the problems of our civilization?'},
        {id: 3, message: 'If this topic interests you, write Yes.'},
    ],
    dialogs: [
        {id: 1, name: 'Edward Carneby'},
        {id: 2, name: 'Belinda Fisher'},
        {id: 3, name: 'John Constantine'},
        {id: 4, name: 'Lana Smith'},
        {id: 5, name: 'Alex Mars'},
        {id: 6, name: 'Albert Wesker'}
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
            case UPDATE_NEW_MESSAGE_BODY:
                return {
                    ...state,
                    newMessageBody: action.body
                    };
            case SEND_MESSAGE:
                let body = state.newMessageBody;
                return {
                    ...state,
                    newMessageBody: '',
                    messages: [...state.messages, {id: 6, message: body}] 
                    };
            default:
                return state;
            
    }
}
    

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default dialogsReducer;