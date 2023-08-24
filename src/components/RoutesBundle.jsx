import React, { useContext, useEffect, useMemo, useState } from 'react'
import {Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import PostById from "../pages/PostById";
import Login from "../pages/Login";
import Posts from '../pages/Posts';
import { AuthContext } from '../context';
import SelectedList from '../pages/SelectedList';

const RoutesBundle = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [selectedPostsIdArr, setSelectedPostsIdArr] = useState([]);


    useEffect(() => {
        if (localStorage.getItem('selectedListIdArr')){
            const selectedPostsIDs = ((localStorage.getItem('selectedListIdArr')).split(','));
            setSelectedPostsIdArr(selectedPostsIDs);
        }
    }, [])

    return (
        <div>
            {isAuth
                ?
                    <Routes>
                        <Route path="/posts" element={<Posts/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/selected" element={<SelectedList selectedPostsIdArr={selectedPostsIdArr} setSelectedPostsIdArr={setSelectedPostsIdArr}/>} />
                        <Route path="/posts/:id" element={<PostById selectedPostsIdArr={selectedPostsIdArr} setSelectedPostsIdArr={setSelectedPostsIdArr}/>} />
                        <Route path="*" element={<Navigate to = "posts"/>} />
                    </Routes>
                :
                    <Routes>
                        <Route path="/login" element={<Login/>} />
                        <Route path="*" element={<Navigate to={'/login'}/>}/>  
                    </Routes>
            }
        </div>
    )
}

export default RoutesBundle
