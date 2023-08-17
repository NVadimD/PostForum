import React from 'react'
import MyPost from './UI/post/MyPost'
import NotFoundDisp from './UI/notFoundDisp/NotFoundDisp'

const PostList = ({posts, remove}) => {
    return (
        <div className='post_list__group'>           

            {posts.length
            ?
            <div className='post_list'>
                {posts.map((post, ind) =>
                    <MyPost remove={remove} key={post.id} number={ind + 1} post={post}/>
                )}
            </div>
            :
            <NotFoundDisp/>}

        </div>
    )
}

export default PostList
