import React, { useEffect, useMemo, useState } from 'react'
import NotFoundDisp from '../components/UI/notFoundDisp/NotFoundDisp'
import { useFetching } from '../hooks/useFetching'
import { PostService } from '../API/PostService'
import '../styles/PostById.css'
import Loader from '../components/UI/loader/Loader'
import MyBtn from '../components/UI/button/MyBtn'
import { useNavigate } from 'react-router-dom'



const SelectedList = ({selectedPostsIdArr, setSelectedPostsIdArr}) => {

    const [selectedPosts, setSelectedPosts] = useState([]);

    const router = useNavigate();

    const [fetchSelectedPosts, postsIsLoading] = useFetching(async() => {
        const temporaryArrOfPosts = []
        for (let i = 0; i < selectedPostsIdArr.length; i++) {
            const response = await PostService.getPostById(selectedPostsIdArr[i])
            temporaryArrOfPosts.push(response)
        }
        setSelectedPosts(temporaryArrOfPosts);
    })

    useEffect(() => {
        fetchSelectedPosts();
    }, [])

    function removeSelectedPost(id) {
        setSelectedPosts(selectedPosts.filter(post => post.id !== id));
        setSelectedPostsIdArr(selectedPostsIdArr.filter(elem => elem !== id + '')); 
    }

    useMemo(() => {
        localStorage.setItem('selectedListIdArr', selectedPostsIdArr)
    }, [selectedPostsIdArr])



    return (
        selectedPostsIdArr.length
            ?
                postsIsLoading
                    ?
                        <Loader/>
                    :
                        <div className='foldedPost__wrapper'>
                                {selectedPosts.map(post =>
                                    <div className="foldedPost_box" key={post.id}>
                                        <h2 className='foldedPost__title'>{post.id}. {post.title}</h2>
                                        <div>{post.body}</div>
                                        <div className="post__buttonsArea">
                                            <div className="like_group">
                                                <div
                                                    className='like_icon_box active'
                                                    onClick={() => removeSelectedPost(post.id)}
                                                >

                                                </div>
                                                <div className="like_word">Saved</div>
                                            </div>
                                            <MyBtn onClick={() => router(`/posts/${post.id}`)}>Open</MyBtn>
                                        </div>

                                    </div>
                                )                                
                                }
                            </div>
            :
                <div>
                    <NotFoundDisp>You don't have any favorite posts</NotFoundDisp>
                </div>
    )
}

export default SelectedList
