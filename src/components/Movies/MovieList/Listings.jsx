import data from '../../../Resources/Movies.json';
import ListingFilms from './ListingsFilm';
import '../Movie.css';

const Listings = () => {
    return (
        <>
            <div className="container">
                <div className="row-md" id="listingheader">
                    <hr id="hr" />
                    <h3>Movies Available To Watch.</h3>
                    <hr id="hr" />
                    <p>To view our movie listings, this is the page for you! To find out more information on each movie, click on the button below.</p>
                </div>
                <div className="row">
                    {
                        data.map((film) => (
                            <div className="col-md-3">
                                <br />
                                <ListingFilms
                                    key={film.id}
                                    title={film.title}
                                    runtime={film.runtime}
                                    rating={film.rating}
                                    poster={film.img}
                                    director={film.director}
                                    actors={film.actors}
                                />
                            </div>
                        ))
                    }

                </div>
            </div>

        </>
    )
}
export default Listings;