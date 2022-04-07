import "./PlacePageStyle.css"
import Bars from "./Bars";
import Restaurants from "./Restaurants";
import { FaCocktail } from 'react-icons/fa';
import { IoRestaurantSharp } from 'react-icons/io5';

const PlacesToGoPage = () => {
    return (
        <div className="row">
            <hr />
            <div className="col-md-12">
                <br />
                <br />
                <h1>Local Venues Nearby...</h1>
                <hr />
                <center>
                    <br />
                    <h2 >Bars <FaCocktail size={50} /></h2>
                    <Bars />
                    <h2>Restaurants <IoRestaurantSharp size={40} /></h2>
                    <Restaurants />
                </center>
                <br />
            </div>
        </div>

    )
}
export default PlacesToGoPage;