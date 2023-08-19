import React, { useEffect, useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyModal from "./components/UI/modal/MyModal";
import PostFilter from "./components/PostFilter";
import { usePosts } from "./hooks/usePosts";
import WelcomePart from "./components/UI/welcome/WelcomePart";
import { PostService } from "./API/PostService";
import { useFetching } from "./hooks/useFetching";
import Loader from "./components/UI/loader/Loader";
import { getPageCount } from "./utils/getPageCount";
import { usePagination } from "./hooks/usePagination";
import MyPagination from "./components/UI/pagination/MyPagination";


function App() {

    const [posts, setPosts] = useState([
        // {id: 1, title: 'JavaScript', body: '3 Description of language'},
        // {id: 2, title: 'Python', body: '2 Description of language'},
        // {id: 3, title: 'Go', body: '1 Description of language'},
        // {id: 4, title: 'Java', body: '4 Description of language'},
        // {id: 5, title: 'Rust', body: '6 Description of language'},
        // {id: 6, title: 'C++', body: '5 Description of language'},
    ])

    function addNewPost(post) {
        setPosts([...posts, post])
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }



    const [modal, setModal] = useState(false);    
    const [filter, setFilter] = useState({sort: 'Select an option', searchQuery: ''});
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.searchQuery);
    
    const [limit, setLimit] = useState(10);
    const [curentPage, setCurentPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(0);


    const [fetchAllPosts, allPostsIsLoading, allPostsLoadingError] = useFetching(async() => {
        const response = await PostService.getAllPosts(limit, curentPage);
        setPosts(response.data);
        const totalPostsCount = response.headers['x-total-count'];
        const pagesCount = getPageCount(totalPostsCount, limit)
        setPagesCount(pagesCount);
    })


    useEffect(() => {
        fetchAllPosts();
    }, [curentPage])

    const pagesArray = usePagination(pagesCount);




    return (
        <div className="App">

            <WelcomePart/>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm add={addNewPost} setModalVisible={setModal}/>
            </MyModal>

            <PostFilter filter={filter} setFilter={setFilter}/>

            {allPostsLoadingError &&
                <div className="loadErr_title">{allPostsLoadingError}</div>} 
            {allPostsIsLoading
                ?
                    <Loader/>
                :
                    <PostList posts={sortedAndSearchedPosts} remove={removePost}/>            
            }

            <MyPagination arr={pagesArray} setPage={setCurentPage}/>

        </div>
    );
}

export default App;



