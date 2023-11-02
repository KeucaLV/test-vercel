import React, { useState } from 'react';
import SearchResults from "./searchResult";
import "./InfoBox.css";

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [showNothingFound, setShowNothingFound] = useState(false);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost/datubazes/selects/search.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `searchTerm=${encodeURIComponent(searchTerm)}`,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Received data from PHP:', data); // Check if data is received

            if (data.length === 0) {
                setShowNothingFound(true);
            } else {
                setShowNothingFound(false);
            }

            setResults(data);

        } catch (error) {
            console.error('Error:', error);

        }

        console.log(`Sending searchTerm: ${searchTerm}`);
    }

    return (
        <>
        <div className="searchMain">
            <form className="form" onSubmit={handleSubmit}>

                <h1 className="searchTitle">Search For A Game!</h1>
                <div className="search-container">

                    <input
                        className="search-input"
                        type="text"
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder="Search for games..."
                    />
                    <button className="search-button" type="submit">Search</button>
                </div>

            </form>
            {showNothingFound && <h1 className="nothingFound">Nothing found!!!</h1>}
            <SearchResults results={results} />
        </div>
        </>
    );
}

export default SearchBar;
