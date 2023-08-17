import React from 'react'
import cl from './WelcomePart.module.css'

const WelcomePart = () => {
    return (
        <div className={cl.welcome_part__wrapper}>
            <h1 className={cl.welcome_part__title}>Welcome to our forum!</h1>
            <p className={cl.welcome_part__body}>
            Discover a community of passionate individuals, engaging discussions, and endless knowledge sharing. Join us today and be part of the conversation!
            </p>
        </div>
    )
}

export default WelcomePart
