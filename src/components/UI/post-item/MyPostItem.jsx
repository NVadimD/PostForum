import React from 'react'
import cl from './MyPostItem.module.css'
import MyRemoveIcon from '../removeIcon/MyRemoveIcon'
import MyBtn from '../button/MyBtn'
import { useNavigate } from 'react-router-dom'


const MyPostItem = ({post, remove, ...props}) => {

    const router = useNavigate();

    function removePost() {
        remove(post);
    }

    async function openPostPage() {
        router(`/posts/${post.id}`)
    }

    return (
        <div className={cl.post}>
            <div className={cl.post__content}>
                <h6 className={cl.content__title}>
                    {post.id}. {post.title}
                </h6>
                <div className={cl.content__body}>
                    {post.body}
                </div>
            </div>
            <div className={cl.post__buttonsArea}>
                <MyRemoveIcon onClick={removePost}/>
                <MyBtn onClick={openPostPage}>Open</MyBtn>
            </div>
        </div>
    )
}

export default MyPostItem
