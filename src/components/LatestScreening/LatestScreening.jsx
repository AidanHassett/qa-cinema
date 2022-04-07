import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import avatar from './Images/avatar.jpg';
import iamlegend from "./Images/i am legend.jpg";
import threehundred from "./Images/300.jpg";

const LatestScreening = () => {
  return (
    <div>
      <h1> Screen Times </h1>
      <CardGroup>
        <Card style={{ backgroundColor: "black" }}>
          <Card.Img variant="top" src={avatar} style={{ height: "550px" }} />
          <Card.Body>
            <Card.Title>Avatar</Card.Title>
            <Card.Text style={{ color: "white", backgroundColor: "black" }}>
            "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small style={{ color: "blue" }}>
              <div>
                <li> 09:00am </li>
                <li> 09:45am</li>
                <li> 12:45pm</li>
                <li> 03:45am</li>
              </div>
            </small>
          </Card.Footer>
        </Card>
        <Card style={{ backgroundColor: "black" }}>
          <Card.Img variant="top" src={iamlegend} style={{ height: "550px" }} />
          <Card.Body>
            <Card.Title>I Am Legend</Card.Title>
            <Card.Text>
            "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure."
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small style={{ color: "blue" }}>
              <div>
                <li> 09:00am </li>
                <li> 09:45am</li>
                <li> 12:45pm</li>
                <li> 03:45am</li>
              </div>
            </small>
          </Card.Footer>
        </Card>
        <Card style={{ backgroundColor: "black" }}>
          <Card.Img
            variant="top"
            src={threehundred}
            style={{ height: "550px" }}
          />
          <Card.Body>
            <Card.Title>300</Card.Title>
            <Card.Text>
            "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C."
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small style={{ color: "blue" }}>
              <div>
                <li> 09:00am </li>
                <li> 09:45am</li>
                <li> 12:45pm</li>
                <li> 03:45am</li>
              </div>
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default LatestScreening;