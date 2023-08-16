import React from 'react'
import MySelect from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'

const PostFilter = ({filter, setFilter}) => {

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
            <div className='search_box'>
                <MyInput placeholder='Search...'/>
            </div>
        </div>
    )
}

export default PostFilter
