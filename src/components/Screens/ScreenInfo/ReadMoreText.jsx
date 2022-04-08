import React from "react";
import ScreenInfoCard from './ScreenInfoCard';
const ReadMoreText = ({toggleOn}) => {
    if (toggleOn === "standard") {
        const title = "Standard Seating";
        const cost = "Standard price per Ticket ";
        const desc = "Standard seating allows you access to the large array of seating inside our cinema whilst providing you with the full QACinema experience, all for just £7.99!";
        return (

            <ScreenInfoCard title={title} cost={cost} desc={desc} />

        )
    }
    else if (toggleOn === "deluxe") {
        const title = "Premium Deluxe Seating";
        const cost = "+£5 per ticket";
        const desc = "The Premium Deluxe seating not only provides you with the full QACinema experience, A new fully immersive feeling to movie viewing in premium seats with a premium view!";
        return (
            <ScreenInfoCard title={title} cost={cost} desc={desc} />
        )
    }
    else {
        return null;
    }
}
 
export default ReadMoreText;