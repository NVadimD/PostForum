import React, { useState } from 'react'
import cl from './MyHeader.module.css'
import MyBtn from '../button/MyBtn'
import { Link, useLocation } from 'react-router-dom';

const MyHeader = () => {

    const [activeLi, setActiveLi] = useState(1);



    return (
        <div className={cl.header}>
            <div className={cl.header__container}>
                    <div className={cl.header__logo}>

                    </div>
                    <div className={cl.header__content}>
                        <div className={cl.nav_bar}>
                            <ul>
                                <li className={`${cl.li} ${activeLi === 1 ? cl.active : ''}`} onClick={() => setActiveLi(1)}>
                                    <Link to="/posts">Post</Link>
                                </li>
                                <li className={`${cl.li} ${activeLi === 2 ? cl.active : ''}`} onClick={() => setActiveLi(2)}>
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
    )
}

export default MyHeader
