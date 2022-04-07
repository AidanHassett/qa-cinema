// import NavBar from "../NavBar/NavBar";
import './Home.css';
import Times from '../OpeningTimes/Times';
import { Container } from 'react-bootstrap'
import WelcomePage from './WelcomePage';
import LatestScreening from '../LatestScreening/LatestScreening';
import NRFilms from '../Movies/NewReleases/NRFilms';
import data from '../Movies/NewReleases/NewReleases.json';
import CarouselPage from './Carousel';
import image1 from '../../res/image1.jpg';
import image2 from '../../res/image2.jpg';
import image3 from '../../res/image3.jpg';


const Home = () => {
    return ( 

        <>

        <CarouselPage>image1={image1} image2={image2} image3={image3}</CarouselPage>

            <h2> Welcome to QA Cinema!</h2>
        <div className="container">
                <div className="row-md" id="newreleasesheader">
                    <hr id="hr" />
                    <h1 className="container" style={{ color: 'gold' }}>Our New Releases</h1>
                    <hr id="hr" />

                </div>

                <div className="row">
                    {data.map((film) => (
                        <div className="col-md-3">
                            <br />
                            <NRFilms

                                key={film.id}
                                title={film.title}
                                runtime={film.runtime}
                                rating={film.rating}
                                poster={film.img}
                                director={film.director}
                                actors={film.actors} />
                        </div>
                    ))}
                </div>
            </div>
            
            <h1 className="title">QA Cinema Reviews</h1><Container className="beauty">
                <WelcomePage/>
                <button className="cssStyle" id="FindOutMore"> Find Out More </button>
                <hr />
                <LatestScreening/>

                <h1 className="title">Opening Times</h1>
                <Times />


            </Container>

            
    </>
     );
}
 
export default Home;