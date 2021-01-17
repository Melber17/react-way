import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'What\'s up?', likesCount: 12},
                {message: 'I like it ', likesCount: 12},
                {message: 'This is amazing!', likesCount: 12},
                {message: 'Nothing more', likesCount: 11}
            ],
            newPostText: 'djidai'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Lip'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Kostia'},
                {id: 4, name: 'Evgeniy'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'John'},
            ],
            messages: [
                {id: 1, message: 'What\'s up guys'},
                {id: 2, message: 'How is it going?'},
                {id: 3, message: 'Nothing , much'},

            ],
            newMessageBody: ""

        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)
    },
}


export default store;
window.store = store;