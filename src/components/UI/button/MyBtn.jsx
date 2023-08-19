import React from 'react'
import cl from './MyBtn.module.css'

const MyBtn = ({children, large, page, exit, ...props}) => {

    const buttonCl =   `${cl.my_btn}
                        ${large ? cl['my_btn--large'] : ''}
                        ${page ? cl['my_btn--page'] : ''}
                        ${exit ? cl ['my_btn--exit'] : ''}`

    return (
        <button className={buttonCl} {...props}>
            {children}
        </button>
    )
}

export default MyBtn
