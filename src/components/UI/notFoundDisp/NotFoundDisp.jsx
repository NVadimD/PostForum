import React from 'react'
import cl from './NotFoundDisp.module.css'

const NotFoundDisp = () => {
    return (
        <div className={cl.not_found_display}>
            <div className={cl.disp__help_line}>Posts not found</div>
            <div className={cl.icon_box}></div>
        </div>
    )
}

export default NotFoundDisp
