import React from 'react'
import MyPost from './UI/post/MyPost'
import NotFoundDisp from './UI/notFoundDisp/NotFoundDisp'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const PostList = ({posts, remove}) => {
    
    return (
        <div className='post_list__group'>   
            {posts.length
            ?
                <div className='post_list'>
                    <TransitionGroup className="transition-group">
                        {posts.map((post, ind) =>
                            <CSSTransition
                                key={post.id}
                                timeout={500}
                                classNames="post"
                            >                        
                                <MyPost remove={remove} number={ind + 1} post={post}/> 
                            </CSSTransition>                       
                        )}
                    </TransitionGroup>
                    
                </div>                
            :
                <NotFoundDisp/>}
        </div>
    )
}

export default PostList
