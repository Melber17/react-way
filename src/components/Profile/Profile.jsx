import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import s from "./Profile.module.css";

export const Profile = () => {
  return <div>
  <div>
    <img src="https://pbs.twimg.com/media/ENjnUTtU4AAg4e9.jpg" alt="baby yoda"/>
  </div>
  <div>
    ava + description
  </div>
  <MyPosts />
</div>
}