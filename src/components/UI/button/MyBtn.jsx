import React from 'react'
import cl from './MyBtn.module.css'

const MyBtn = ({children, large, page, ...props}) => {

    const buttonCl = `${cl.my_btn} ${large ? cl['my_btn--large'] : ''} ${page ? cl['my_btn--page'] : ''}`

    return (
        <button className={buttonCl} {...props}>
            {children}
        </button>
    )
}

export default MyBtn
