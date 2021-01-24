import React from 'react';
import s from '../Dialogs.module.scss'

export const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}



