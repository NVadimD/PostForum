import React from 'react'
import cl from './MyInput.module.css'

const MyInput = ({value, onChange, ...props}) => {
    return (
        <input
            value={value}
            onChange={onChange}
            className={cl.myInp} 
            {...props}
        >
        
        </input>
    )
}

export default MyInput
