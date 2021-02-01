
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

    ]

}


export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case
        SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body} ]
            };
        default:
            return state;
    }


}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

