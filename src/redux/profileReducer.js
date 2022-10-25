const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 7},
        {id: 2, message: 'im fine', likesCount: 12},
        {id: 3, message: 'How are you?', likesCount: 15},
        {id: 4, message: 'Hahahaha', likesCount: 6},
        {id: 5, message: 'Cool', likesCount: 2},
    ],
    newPostText: 'new post',
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
            case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
            case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newText;
            return state;
            default:
            return state;     
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });


export default profileReducer;