import { useState } from "react";
import ReadMoreText from "../ScreenInfo/ReadMoreText";
import ScreensReadMore from "../ScreenInfo/ScreensReadMore";
import "../css/Screen.css";
import pic1 from "../res/screens/ScreenPics/cinema-seating-plan.png";
import pic3 from "../res/screens/ScreenPics/deluxeseating1.jpg";
import pic4 from "../res/screens/ScreenPics/deluxeseating2.jpg";
import pic5 from "../res/screens/ScreenPics/LuxurySeating.jpg";
import pic2 from "../res/screens/ScreenPics/StandardSeating.jpg"
import pic6 from "../res/screens/ScreenPics/cinema-seating-plan.png";

const ScreenPage = () => {
    const [toggleOn, setToggleOn] = useState("")

    const CardInfoStandard = () => {
        setToggleOn("standard");
    }

    const CardInfoDeluxe = () => {
        setToggleOn("deluxe");
    }


    return (


        // Carousel

        <>
            <br />
            <div className="row" style={{ height: "400px" }} >
                <div className="slider-container ">
                    <CarouselComp image1={pic2} image2={pic3} image3={pic1} />
                </div>
                <div className="slider-container">
                    <CarouselComp image1={pic4} image2={pic5} image3={pic6} style={{ height: "400px" }} />
                </div>
            </div>
            <br />

            {/* Name of the seating plans  */}


            <div className="row">
                <div className="col-6">
                    <p id="beauty" style={{ color: "blue" }} className="myTitle">Standard Seating</p>
                </div>
                <div className="col-6">
                    <p id="beauty" className="myTitle" style={{ color: "blue" }}>Deluxe Seating</p>
                </div>
            </div>

            {/* Buttons for Read More */}

            <div className="row">
                <div className="col-md-6">
                    <ScreensReadMore screen="standard" toggleState={CardInfoStandard} />
                </div>
                <div className="col-md-6">
                    <ScreensReadMore screen="deluxe" toggleState={CardInfoDeluxe} />
                </div>
            </div>

            {/* Info on screen type */}

            <br />
            <ReadMoreText toggleOn={toggleOn} />
        </>
    )
}
 
export default ScreenPage;