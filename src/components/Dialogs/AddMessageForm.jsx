import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50 ]} placeholder="Enter your message" name="newMessageBody" />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}
