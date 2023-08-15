import React from 'react'
import MyPost from './UI/post/MyPost'

const PostList = ({posts, remove}) => {
    return (
        <div className='post_list'>
            {posts.map((post, ind) => 
                <MyPost remove={remove} key={post.id} number={ind + 1} post={post}/>
            )}
        </div>
    )
}

export default PostList
