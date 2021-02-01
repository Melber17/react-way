import React from 'react';
import {Post} from '../Post/Post';
import s from "./MyPosts.module.scss";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea} placeholder={"Post message"} validate={[required, maxLength10 ]}/>
        </div>
        <div className={s.addButtonWrapper}>
            <button className={s.addButton}>Add post</button>
        </div>
    </form>;
}

AddNewPostForm= reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export const MyPosts = (props) => {
    debugger;
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return <div className={s.postsBlock}>
        <div>
            <h3 className={s.title}>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    </div>


}

