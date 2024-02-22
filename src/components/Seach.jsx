import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import axios from 'axios'
import { UrlGeo,geoApi } from './Api.js'

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null)
    const [searchResults, setSearchResults] = useState([]);

    const loadOptions = async (inputValue) => {     
        try {
            const response = await axios.get(UrlGeo, {
                params: {
                    q: inputValue
                },
                headers: geoApi.headers
            });

            console.log(response.data);
            return response.data.data.map(city => ({
                label: city.city,
                value: city.id
            }));
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return (
        <>
        <AsyncPaginate
            placeholder='Seach for City'
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
        <div>
                {searchResults.map(city => (
                    <div key={city.id}>{city.city}</div>
                ))}
            </div>
        </>
    )
}

export default Search