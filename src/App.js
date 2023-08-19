import React from "react";
import Posts from "./pages/Posts";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import MyHeader from "./components/UI/header/MyHeader";

function App() {

    return (
        <div className="App">
            <BrowserRouter>

                <MyHeader/>

                <Routes>
                    <Route path="/posts" element={<Posts/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="*" element={<Navigate to = "posts"/>} />
                </Routes>
                
            </BrowserRouter>

        </div>
    );
}

export default App;



