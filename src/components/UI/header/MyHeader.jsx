import React, { useContext, useState } from 'react'
import cl from './MyHeader.module.css'
import MyBtn from '../button/MyBtn'
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context';

const MyHeader = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    const {isAuth, setIsAuth} = useContext(AuthContext);


    return (
        <div className={cl.header__wrapper}>
        {isAuth
            ?
                <div className={cl.header}>
                    <div className={cl.header__container}>
                            <div className={cl.header__logo}>

                            </div>
                            <div className={cl.header__content}>
                                <div className={cl.nav_bar}>
                                    <ul>
                                        <li className={`${cl.li} ${currentPath === '/posts' ? cl.active : ''}`}>
                                            <Link to="/posts">Post</Link>
                                        </li>
                                        <li className={`${cl.li} ${currentPath === '/about' ? cl.active : ''}`}>
                                            <Link to="/about">About</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className={cl.user_section}>
                                    <div className={cl.user_section__name}>
                                        @VaDuXXXa
                                    </div>
                                    <div className="user_section__logout_btn">
                                        <MyBtn exit>Log out</MyBtn>
                                    </div>
                                </div>
                            </div>              
                    </div>
                </div>
            :
                null
        }        
        </div>
    )
}

export default MyHeader
