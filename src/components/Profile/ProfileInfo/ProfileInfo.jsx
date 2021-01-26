import React from 'react';
import s from "./ProfileInfo.module.scss";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return <div>
        <div>
            <img src="https://pbs.twimg.com/media/ENjnUTtU4AAg4e9.jpg" alt="baby yoda"/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} />
           This is a posts
        </div>
    </div>
}
export default ProfileInfo;