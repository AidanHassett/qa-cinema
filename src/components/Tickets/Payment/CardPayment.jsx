import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Form, Button, Card } from 'react-bootstrap';


const CardPayment = () => {

    const [bookingData, setBookingData] = useState("");

    const findBooking = useRef(null);

    const [totalCost, setTotalCost] = useState("");

    const getBooking = () => {
        axios.get(`http://localhost:4494/booking/get/${findBooking.current.value}`) // Sending a get request to the server
          .then((response) => { 
            setBookingData(response.data);
            })
        };

        useEffect(() => {
            if(bookingData !== ""){
                let adultCost = 14 * bookingData.number_of_adults
                let childCost = 8 * bookingData.number_of_children
                let concessionCost = 1.25 * bookingData.concessions.length
                setTotalCost(adultCost + childCost + concessionCost);  
            }
        },[bookingData]);

    return (
        <>
        <br></br>
        <Card className="paymentCard" style={{ width: '40rem' }}> 
        <Card.Text className="paymentTitle">Please Enter your Booking Reference Number (Paste into the box below):</Card.Text>
        <Form.Control type="text" className="paymentForm"  placeholder="Booking Reference Number" ref={findBooking}/>
        <Button variant="primary" onClick={getBooking}>Find Booking!</Button>
        
        {bookingData !== "" &&
            <>
            <Card.Text className="paymentText"><br></br>{bookingData.full_name}!</Card.Text>
            <Card.Text className="paymentText">You have booked a total of {bookingData.number_of_seats} tickets, including {bookingData.number_of_adults} Adults and {bookingData.number_of_children} Children</Card.Text>
            <Card.Text className="paymentText">Alongside this, you have ordered {bookingData.concessions.length} items from our concessions.</Card.Text>
            </>
        }
            {totalCost !== "" &&
            <>
            <Card.Text className="paymentText">The total cost of this booking is: £{totalCost}</Card.Text>
            <Button className="paymentText" amount={totalCost} options={{clientId: "sb", currency: "GBP"}} onSuccess={(details, data) => { alert("Transaction completed by " + details.payer.name.given_name);}}/>
            </>
        }
        </Card>    
        </>
        
     );
}
 
export default CardPayment;