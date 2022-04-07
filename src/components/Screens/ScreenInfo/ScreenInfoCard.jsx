import React from "react";
import "../css/Screen.css";
const ScreenInfoCard = () => {
    return ( 
        <center>
            <div className="container" style={{ backgroundColor: "black" }} type="hidden">
                <div className="col">
                    <p id="myInfoTitle" style={{ fontSize: "6vmin", color: "gold", fontWeight: "800" }}>{title}</p>
                    <hr />
                    <p id="myInfo">{cost}</p>
                    <p id="myInfo">{desc}</p>
                    <hr />
                </div>
            </div>
        </center>
     );
}
 
export default ScreenInfoCard;