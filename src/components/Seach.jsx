import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { geoApiUrl,geoApi } from './Api.js'

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null)

    const loadOptions = async (inputValue) => {     
        const response = await fetch(geoApiUrl, geoApi);
        response => response.json()
        // return const response = await fetch(url, geoApi);
        // const result = await response.text();
        // console.log(result);  
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return (
        <AsyncPaginate
            placeholder='Seach for City'
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search