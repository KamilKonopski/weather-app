import React from 'react';

import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className='search-box'>
            <input
                type="text"
                className='search-bar'
                placeholder='Search...'
            />
        </div>
    );
};

export default SearchBar;