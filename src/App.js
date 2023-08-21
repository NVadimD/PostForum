import React from "react";
import Posts from "./pages/Posts";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import MyHeader from "./components/UI/header/MyHeader";
import PostById from "./pages/PostById";
import Login from "./pages/Login";

function App() {

    return (
        <div className="App">
            <BrowserRouter>

                <MyHeader/>

                <Routes>
                    <Route path="/posts" element={<Posts/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/posts/:id" element={<PostById/>} />
                    <Route path="*" element={<Navigate to = "posts"/>} />
                    <Route path="/login" element={<Login/>} />
                </Routes>
                
            </BrowserRouter>

        </div>
    );
}

export default App;



