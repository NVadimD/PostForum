import React, { useContext } from 'react'
import '../styles/Login.css'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context'

const Login = () => {

    const {isAuth, setIsAuth, userName, setUserName} = useContext(AuthContext);

    function login(event) {
        event.preventDefault();
        localStorage.setItem('auth', 'true')
        localStorage.setItem('userName', userName)
        setIsAuth(true);
    }

    return (
        <div className='login_page'>
            <div className="login_page__left_half">

            </div>
            <div className="login_page__right_half">

            </div>
            <div className="login_desk">
                <form className="content__container" onSubmit={login}>
                    Welcome
                    <div className="signin_word">Sign in</div>
                    <div className="input_title">
                        Enter your username
                    </div>

                    <MyInput
                        required
                        placeholder='@username'
                        value={userName}
                        onChange={event => setUserName(event.target.value)}
                    />

                    <div className="input_title">             
                        Enter your password
                    </div>
                    
                    <MyInput required placeholder='password123' type='password'/>

                    <button type='submit' className='signin_btn'>Sign in</button>
                    <div className="first_img">

                    </div>
                    <div className="second_img">
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
