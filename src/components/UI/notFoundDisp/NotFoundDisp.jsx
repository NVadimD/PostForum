import React from 'react'
import cl from './NotFoundDisp.module.css'

const NotFoundDisp = () => {
    return (
        <div className={cl.not_found_display}>
            <spun className={cl.disp__help_line}>Постов не найдено!</spun>
            <div className={cl.icon_box}></div>
        </div>
    )
}

export default NotFoundDisp
