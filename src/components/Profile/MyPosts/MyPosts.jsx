import React from 'react';
import {Post} from '../Post/Post';
import s from "./MyPosts.module.css";

export const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);

    }

    return <div className={s.postsBlock}>
        <div>
            <h3 className={s.title}>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              className={s.TextInput}
                              ref={newPostElement}
                              value={props.newPostText}/>
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