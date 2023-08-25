import React from 'react'
import cl from './WelcomePart.module.css'

const WelcomePart = ({title, subtitle}) => {
    return (
        <div className={cl.welcome_part__wrapper}>
            <h1 className={cl.welcome_part__title}>{title}</h1>
            <p className={cl.welcome_part__body}>
                {subtitle}
            </p>
        </div>
    )
}

export default WelcomePart
