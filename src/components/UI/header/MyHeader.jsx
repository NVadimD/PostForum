import React from 'react'
import cl from './MyHeader.module.css'
import MyBtn from '../button/MyBtn'

const MyHeader = () => {
    return (
        <div className={cl.header}>
            <div className={cl.header__container}>
                    <div className={cl.header__logo}>

                    </div>
                    <div className={cl.header__content}>
                        <div className={cl.nav_bar}>
                            <ul>
                                <li>Post</li>
                                <li>About</li>
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
