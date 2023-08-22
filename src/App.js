import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MyHeader from "./components/UI/header/MyHeader";
import RoutesBundle from "./components/RoutesBundle";
import { AuthContext } from "./context";


function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [userName, setUserName] = useState('');

    const checkAuth = () => {
        const auth = localStorage.getItem('auth');
        if (auth === 'true') {
            setIsAuth(true);
        }
        const user = localStorage.getItem('userName');
        if (user) {
            setUserName(user);
        }
    }

    useEffect(() => {
        checkAuth();
    }, [])

    return (
        <div className="App">

            <AuthContext.Provider value = {{
                isAuth,
                setIsAuth,
                userName,
                setUserName
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



