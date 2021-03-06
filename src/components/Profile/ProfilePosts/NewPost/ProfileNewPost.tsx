import React, {ChangeEvent} from 'react';
import s from "./ProfileNewPost.module.css";

type ProfileNewPostType = {
    message: string
    addPost: (postText: string) => void
    onPostChange: (newText: string) => void
}


export const ProfileNewPost = React.memo((props: ProfileNewPostType) => {


    const addPost = () => {
        props.addPost(props.message)
        props.onPostChange('')
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
    }

    return <div className={s.createPosts}>
        Create Post
        <hr/>
        <span className={s.avatar}>
            <img
                src={"https://sun1-83.userapi.com/s/v1/ig2/GTd8EAwDEzqcOlUQLoyckauXcHETC5dOMfQw_yPT0Xcc_mpfp5tD-GGnDG2DAG6pI4fi_7Ko5kdz_H2ofkuO7t5R.jpg?size=200x0&quality=96&crop=82,440,609,609&ava=1\""}
                alt={'avatar'}
            />
        </span>

        <textarea placeholder={"Write something here..."} value={props.message} onChange={onPostChange}/>
        <hr/>
        <button onClick={addPost}>Add</button>
    </div>
})

