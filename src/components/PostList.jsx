import React from 'react'
import MyPost from './UI/post/MyPost'
import NotFoundDisp from './UI/notFoundDisp/NotFoundDisp'

const PostList = ({posts, remove}) => {
    return (
        posts.length
        ?
        <div className='post_list'>
            {posts.map((post, ind) => 
                <MyPost remove={remove} key={post.id} number={ind + 1} post={post}/>
            )}
        </div>
        :
        <NotFoundDisp/>
    )
}

export default PostList
