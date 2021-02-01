import React from 'react';
import s from './Dialogs.module.scss'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form"
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {AddMessageForm} from "./AddMessageForm";
export const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messageElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messageElements} </div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}



const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)