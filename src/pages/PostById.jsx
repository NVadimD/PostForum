import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import { PostService } from '../API/PostService';
import '../styles/PostById.css'

const PostById = () => {

    const params = useParams();

    const [unfoldedPost, setUnfoldedPost] = useState({title: '', body: ''})
    const [comments, setComments] = useState([]);

    const [fetchPostByID, postIsLoading, postLoadigError] = useFetching(async() => {
        const response = await PostService.getPostById(params.id);
        setUnfoldedPost({title: response.title, body: response.body})        
    })

    const [fetchCommentsById, commentsIsLoading, commentsLoadingError] = useFetching(async() => {
        const response = await PostService.getCpmmentsById(params.id);
        setComments(response);
    })

    useEffect(() => {
        fetchPostByID();
        fetchCommentsById();
    }, [])

    return (
        <div className='foldedPost__wrapper'>
            <div className="foldedPost_box">
                <h2 className='foldedPost__title'>{params.id}. {unfoldedPost.title}</h2>
                <div>{unfoldedPost.body}</div>
                <div className='like_icon_box'></div>
            </div>
            <div className="comments_box">
                <div className="commets_word">Comments <span className='comments_quantity'>{comments.length}</span></div>
                {comments.map(comment =>
                    <div>
                        <div className='comment_email'>{comment.email}:</div>
                        <div className='comment_body'>{comment.body}</div>
                    </div>    
                )}
            </div>                    
        </div>
    )
}

export default PostById
