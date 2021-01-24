import React from 'react';
import s from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
    return <div>
        <div>
            <img src="https://pbs.twimg.com/media/ENjnUTtU4AAg4e9.jpg" alt="baby yoda"/>
        </div>
        <div className={s.descriptionBlock}>
           This is a posts
        </div>
    </div>
}
export default ProfileInfo;