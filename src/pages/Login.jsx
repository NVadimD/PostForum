import React from 'react'
import '../styles/Login.css'
import MyInput from '../components/UI/input/MyInput'
import MyBtn from '../components/UI/button/MyBtn'

const Login = () => {
    return (
        <div className='login_page'>
            <div className="login_page__left_half">

            </div>
            <div className="login_page__right_half">

            </div>
            <div className="login_desk">
                <form className="content__container">
                    Welcome
                    <div className="signin_word">Sign in</div>
                    <div className="input_title">
                        Enter your username
                    </div>                    
                    <MyInput reqired placeholder='@username'/>    
                    <div className="input_title">             
                        Enter your password
                    </div>   
                    <MyInput reqired placeholder='password123' type='password'/>
                    <button className='signin_btn'>Sign in</button>
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
