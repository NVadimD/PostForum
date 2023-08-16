import React from 'react'
import cl from './MyInput.module.css'

const MyInput = ({value, onChange, large, ...props}) => {

    const clInput = `${cl.myInp} ${large ? cl['myInp--large'] : ''}`

    return (
        <input
            value={value}
            onChange={onChange}
            className={clInput} 
            {...props}
        >
        
        </input>
    )
}

export default MyInput
