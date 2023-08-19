import React from 'react'
import MyBtn from '../button/MyBtn'
import cl from './MyPagination.module.css'

const MyPagination = ({arr, setPage}) => {

    const changePage = (event) => {
        const newPageNumber = event.target.textContent;
        setPage(newPageNumber);
    }

    return (
        <div className={cl.page_box}>
            {arr.map(p =>
                <MyBtn page onClick={changePage} key={p}>{p}</MyBtn>    
            )}
        </div>
    )
}

export default MyPagination
