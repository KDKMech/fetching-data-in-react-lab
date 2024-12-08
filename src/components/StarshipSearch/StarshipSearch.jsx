import React from "react";


const handleSubmit = (event) => {
    event.preventDefault()
    
}



const Search = (props) => {
    return (
        <form action="">
            <h3>Search</h3>
            <label htmlFor="searchBar">Search Term</label>
            <input type="text" name="searchBar" id="searchBar" />
            <button type="submit"> Search</button>
        </form>
    )
}

export default Search