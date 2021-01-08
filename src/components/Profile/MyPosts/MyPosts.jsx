import React from 'react';
import {Post} from '../Post/Post';
import s from "./MyPosts.module.css";

export const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

 let newPostElement = React.createRef();

 let addPost = () => {
     let text = newPostElement.current.value;
     alert(text);
 }


    return <div className={s.postsBlock}>
        <div>
            <h3 className={s.title}>My posts</h3>
            <div>
                <div>
                    <textarea className={s.TextInput} ref={newPostElement}>rtyurtyu</textarea>
                </div>
                <div className={s.addButtonWrapper}>
                    <button onClick={addPost} className={s.addButton}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    </div>


}