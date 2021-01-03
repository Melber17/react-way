import React from 'react';
import { Post } from '../Post/Post';
import s from "./MyPosts.module.css";
export const MyPosts = () => {
  return <div>
    <div>
      My posts
      <div>
        <textarea></textarea>'
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message="What's up?" />
        <Post message="Nothing more" />
      </div>
    </div>
  </div>

  
  
}