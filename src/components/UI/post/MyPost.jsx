import React from 'react'
import cl from './MyPost.module.css'
import MyRemoveIcon from '../removeIcon/MyRemoveIcon'
import MyOpenPostBtn from '../button/MyBtn'

const MyPost = ({post, remove, ...props}) => {

    function removePost() {
        remove(post);
    }

    return (
        <div className={cl.post}>
            <div className={cl.post__content}>
                <h6 className={cl.content__title}>
                    {props.number}. {post.title}
                </h6>
                <div className={cl.content__body}>
                    {post.body}
                </div>
            </div>
            <div className={cl.post__buttonsArea}>
                <MyRemoveIcon onClick={removePost}/>
                <MyOpenPostBtn>Read</MyOpenPostBtn>
            </div>
        </div>
    )
}

export default MyPost
