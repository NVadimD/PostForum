import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import { PostService } from '../API/PostService';
import '../styles/PostById.css'
import Loader from '../components/UI/loader/Loader';

const PostById = ({selectedPostsIdArr, setSelectedPostsIdArr}) => {

    const params = useParams();

    const [unfoldedPost, setUnfoldedPost] = useState({title: '', body: ''})
    const [comments, setComments] = useState([]);

    const [fetchPostByID, postIsLoading] = useFetching(async() => {
        const response = await PostService.getPostById(params.id);
        setUnfoldedPost({title: response.title, body: response.body})        
    })

    const [fetchCommentsById, commentsIsLoading] = useFetching(async() => {
        const response = await PostService.getCpmmentsById(params.id);
        setComments(response);
    })

    useEffect(() => {
        fetchPostByID();
        fetchCommentsById();
    }, [])

    function addPostToSelectedList() {
        if (selectedPostsIdArr.includes(params.id)){
            setSelectedPostsIdArr(selectedPostsIdArr.filter(id => id !== params.id))
            
        } else {
            setSelectedPostsIdArr([...selectedPostsIdArr, params.id]);
        }
    }

    useMemo(() => {
        localStorage.setItem('selectedListIdArr', selectedPostsIdArr)
    }, [selectedPostsIdArr])


    return (
        commentsIsLoading || postIsLoading
        ?
            <Loader/>
        :
            <div className='foldedPost__wrapper'>
                <div className="foldedPost_box">
                    <h2 className='foldedPost__title'>{params.id}. {unfoldedPost.title}</h2>
                    <div className='foldedPost__body'>{unfoldedPost.body}</div>
                    <div className={selectedPostsIdArr.includes(params.id) ? 'like_icon_box active' : 'like_icon_box'} onClick={addPostToSelectedList}></div>
                </div>
                <div className="comments_box">
                    <div className="commets_word">Comments <span className='comments_quantity'>{comments.length}</span></div>
                    {comments.map(comment =>
                        <div key={comment.id}>
                            <div className='comment_email'>{comment.email}:</div>
                            <div className='comment_body'>{comment.body}</div>
                        </div>    
                    )}
                </div>                    
            </div>
    )
}

export default PostById
