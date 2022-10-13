const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            newMessageText: 'new message',
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
        debugger;
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },

}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });



export default store;
window.store = store;