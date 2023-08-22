import React, { useContext } from 'react'
import {Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import PostById from "../pages/PostById";
import Login from "../pages/Login";
import Posts from '../pages/Posts';
import { AuthContext } from '../context';

const RoutesBundle = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
        <div>
            {isAuth
                ?
                    <Routes>
                        <Route path="/posts" element={<Posts/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/posts/:id" element={<PostById/>} />
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
