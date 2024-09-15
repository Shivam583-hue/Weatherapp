import React from 'react'
import './Search.css'

function SeachComponent({search, setSeach, handleSearch}) {
    return (
        <div className='Searching'>
            <input
                type='text'
                className='searchbar'
                placeholder='Enter city name...'
                value={search}
                onChange={(e) => setSeach(e.target.value)}
            />
            <button className='search-button' onClick={handleSearch}>Search</button>
        </div>
  )
}

export default SeachComponent
