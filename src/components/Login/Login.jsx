import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormControls/FormsControls.module.scss"
export const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input} name={"email"} validate={[required]} placeholder={"Email"}/>
                </div>
                <div>
                    <Field component={Input} name={"password"} validate={[required]} placeholder={"Password"} type={"password"}/>
                </div>
                <div>
                    <Field component={Input} name={"remember me"} id={"check"} type={"checkbox"}/> <label for={"check"} >remember me</label>
                </div>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

 const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)