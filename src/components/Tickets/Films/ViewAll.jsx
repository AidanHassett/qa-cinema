import React, { useState } from 'react'
import films from "../../../res/Movies.json"
import TicketSearch from '../TicketPage/TicketSearch'
import Input from './Input'

const ViewAll = ({ basketinfo }) => {


    // Search bar functions
    const [query, setquery] = useState("")

    const byQuery = (query) => (films) => films.title.toLowerCase().includes(query.toLowerCase());

    let filteredList = [];
    filteredList = films.filter(byQuery(query));


    const handleQuery = (e) => {
        setquery(e.target.value);
    }




    return (

        <>
            <div className="container">
                <TicketSearch query={query} setquery={handleQuery} />
                {filteredList.map((film) => (
                    <div key={film.id} >
                        <hr />
                        <div className="row" style={{ marginLeft: "20px" }}>
                            <h4 style={{ color: 'gold' }} >{film.title}</h4>
                            <Input basketinfo={basketinfo} filmname={film.title} />
                        </div>
                        <h6 style={{ color: 'gold', marginTop: "3px", marginLeft: "20px" }}>Rated: {film.rating}</h6>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ViewAll