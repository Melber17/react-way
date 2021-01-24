import React from 'react';
import s from '../Dialogs.module.scss'
import {NavLink} from "react-router-dom";


export const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>;
}


