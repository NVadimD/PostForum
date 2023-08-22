import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MyHeader from "./components/UI/header/MyHeader";
import RoutesBundle from "./components/RoutesBundle";
import { AuthContext } from "./context";


function App() {

    const [isAuth, setIsAuth] = useState(true);

    return (
        <div className="App">

            <AuthContext.Provider value = {{
                isAuth,
                setIsAuth
            }}>

                <BrowserRouter>
                    <MyHeader/>
                    <RoutesBundle/>
                </BrowserRouter>

            </AuthContext.Provider>
        </div>
    );
}

export default App;



