import React from 'react'
import cl from './MyPost.module.css'
import MyRemoveIcon from '../removeIcon/MyRemoveIcon'

const MyPost = () => {
    return (
        <div className={cl.post}>
            <div className={cl.post__content}>
                <h6 className={cl.content__title}>
                    JavaScript
                </h6>
                <div className={cl.content__body}>
                Discover a community of passionate individuals, engaging discussions, and endless knowledge sharing. Join us today and be part of the conversation!
                </div>
            </div>
            <div className={cl.post__buttonsArea}>
                <MyRemoveIcon/>
                <button className={cl.addPostButton}>Read</button>
            </div>
        </div>
    )
}

export default MyPost
