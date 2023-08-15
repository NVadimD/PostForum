import React from 'react'
import cl from './MyBtn.module.css'

const MyBtn = ({children, large, ...props}) => {

    const buttonCl = `${cl.my_btn} ${large ? cl['my_btn--large'] : ''}`

    return (
        <button className={buttonCl} {...props}>
            {children}
        </button>
    )
}

export default MyBtn
