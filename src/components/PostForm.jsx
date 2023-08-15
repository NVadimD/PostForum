import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyBtn from './UI/button/MyBtn'

const PostForm = ({add, setModalVisible}) => {

    const [post, setPost] = useState({id: Date.now(), title:'', body:''})

    function addPost() {
        if (!post.title || !post.body) {
            return false;
        } else {
            add(post);
            setPost({id: Date.now(), title:'', body:''})
            setModalVisible(false);
        }
    }

    return (
        <div className='post_form'>
            <MyInput
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
                placeholder='Title of post'
            />
            <MyInput
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
                placeholder='Body of post'
            />
            <MyBtn large onClick={addPost}>Create post</MyBtn>
        </div>
    )
}

export default PostForm
