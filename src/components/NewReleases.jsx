import React, { useState, useEffect } from 'react';
const NewReleases = () => {

    const movieAPI = "http://www.omdbapi.com/?i=tt3896198&apikey=68baa035"

    const [ movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(movieAPI);

    }, [])

    return (
        <div>
        <h2>New Releases!</h2>
        </div>
      );
}
 
export default NewReleases;