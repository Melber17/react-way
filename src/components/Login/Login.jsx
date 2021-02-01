import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {required} from "../../utils/validators/validators";
export const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={"input"} name={"login"} validate={[required]} placeholder={"Login"}/>
                </div>
                <div>
                    <Field component={Input} name={"password"} validate={[required]} placeholder={"Password"} />
                </div>
                <div>
                    <Field component={Input} name={"remember me"} id={"check"} type={"checkbox"}/> <label for={"check"} >remember me</label>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}