import React, { useState } from "react";
import './styles/App.css';
import MyPost from "./components/UI/post/MyPost";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyModal from "./components/UI/modal/MyModal";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description of language'},
        {id: 2, title: 'Python', body: 'Description of language'},
        {id: 3, title: 'Go', body: 'Description of language'},
        {id: 4, title: 'Java', body: 'Description of language'},
        {id: 5, title: 'Rust', body: 'Description of language'},
        {id: 6, title: 'C++', body: 'Description of language'},
    ])

    function addNewPost(post) {
        setPosts([...posts, post])
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }




    const [modal, setModal] = useState(false);



    return (
        <div className="App">

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm add={addNewPost} setModalVisible={setModal}/>
            </MyModal>

            <PostList posts={posts} remove={removePost}/>
        </div>
    );
}

export default App;



