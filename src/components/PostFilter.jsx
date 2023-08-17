import React, { useState } from 'react'
import MySelect from './UI/select/MySelect'
import SearchBar from './UI/searchBar/SearchBar'

const PostFilter = ({filter, setFilter}) => {

    const [searchActive, setSearchActive] = useState(false);

    return (
        <div className='filter_box'>

            <div className='sort_box'>
                <MySelect
                    defaultValue='Select an option'
                    options={[
                        {value: 'title', name: 'By title'},
                        {value: 'body', name: 'By content'}
                    ]}
                    value={filter.sort}
                    onChange={sort => setFilter({...filter, sort: sort})}
                />
            </div>

            <SearchBar active={searchActive} setActive={setSearchActive} searchQuery={filter.searchQuery}>
                {searchActive
                    ?
                        <input
                            value={filter.searchQuery}
                            onChange={event => setFilter({...filter, searchQuery: event.target.value})}
                            placeholder='Search...'
                            onClick={event => event.stopPropagation()}
                        />
                    :
                        <div></div>
                }
                
            </SearchBar>
        </div>
    )
}

export default PostFilter
