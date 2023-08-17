import React from 'react'
import cl from './SearchBar.module.css'

const SearchBar = ({active, setActive, searchQuery, children}) => {

    const searchCl = `${cl.search_box} ${active ? cl.active : ''}`

    const changeActive = () => {
        if (!active) {
            setActive(true);
        } else if (active && searchQuery === '') {
            setActive(false);
        }
    }

    return (
        <div className={searchCl}>
            <div>
                {children}
            </div>
            <div className={cl.search_box__icon_box} onClick={changeActive}>
                <div className={cl.icon_box__icon}>

                </div>
            </div>
        </div>
    )
}

export default SearchBar
