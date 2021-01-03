import React from 'react';
import s from "./Post.module.css";
export const Post = (props) => {
  return ( 
    <div>
      <div className={s.item}>
        <img src="https://habrastorage.org/webt/5f/5c/79/5f5c7971e8fbe454808661.jpeg" alt="avatar" />
          {props.message}
      </div>
      <span>Like</span>
    </div>    
)}
