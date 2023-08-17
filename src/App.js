import React, { useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyModal from "./components/UI/modal/MyModal";
import PostFilter from "./components/PostFilter";
import { usePosts } from "./hooks/usePosts";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: '3 Description of language'},
        {id: 2, title: 'Python', body: '2 Description of language'},
        {id: 3, title: 'Go', body: '1 Description of language'},
        {id: 4, title: 'Java', body: '4 Description of language'},
        {id: 5, title: 'Rust', body: '6 Description of language'},
        {id: 6, title: 'C++', body: '5 Description of language'},
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



    return (
        <div className="App">

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm add={addNewPost} setModalVisible={setModal}/>
            </MyModal>

            <PostFilter filter={filter} setFilter={setFilter}/>

            <PostList posts={sortedAndSearchedPosts} remove={removePost}/>            

        </div>
    );
}

export default App;



