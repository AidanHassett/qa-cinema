import React from "react";

const OpeningTimes = () => {
    return ( 
        <div>
        <table border="black">   
        <h2>The opening times are:</h2>
        <tr>
        <td>Monday to Thursday: 09:00AM - 23:59PM</td> 
        </tr>
        <tr>
        <td>Friday to Saturday: 09:00AM - 02:00AM</td>
        </tr>
        <tr>
        <td>Sunday: 10:00AM - 18:00PM</td>
        </tr>
        </table>  
        </div>
     );
}
 
export default OpeningTimes;