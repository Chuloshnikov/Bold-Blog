import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 7},
                {id: 2, message: 'im fine', likesCount: 12},
                {id: 3, message: 'How are you?', likesCount: 15},
                {id: 4, message: 'Hahahaha', likesCount: 6},
                {id: 5, message: 'Cool', likesCount: 2},
            ],
            newPostText: 'new post',
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber () {
        console.log('state was changed');
    },
    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer; //pattert "observer"
    },
    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
            
        this._callSubscriber(this._state);
        }
}


export default store;
window.store = store;