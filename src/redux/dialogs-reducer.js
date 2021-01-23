const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

}


export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case
        UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case
        SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body} ]
            };
        default:
            return state;
    }


}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}
