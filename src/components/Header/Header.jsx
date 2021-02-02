import React from 'react';
import s from "./Header.module.scss"
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return <header className={s.header}>
        <img
            src="https://www.apple.com/v/apple-events/home/n/images/overview/meta/og__fodnljjkwl6y.png?202011090231"
            alt="apple"/>

        <div className={s.coverLogin}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink className={s.loginBlock} to={'/login'}>Login</NavLink>}

        </div>
    </header>

}
