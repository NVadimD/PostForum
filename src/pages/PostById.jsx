import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import { PostService } from '../API/PostService';

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
        <div>
            Post № {params.id} <br/><br/>
            Title of post:<h2>{unfoldedPost.title}</h2><br/>
            Content of post:<div>{unfoldedPost.body}</div><br/>
            Comments:<br/>
            {comments.map(comment =>
                <div>
                    <h6>{comment.email}:</h6>
                    <div>{comment.body}</div><br/>
                </div>    
            )}
            
        </div>
    )
}

export default PostById
