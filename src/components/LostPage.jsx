import React from "react";
import { Col, Image, Button } from "react-bootstrap/";
import "../css/AboutStyle.css";
import logo from "../Resources/QA-cinema.png";
import { Link } from 'react-router-dom';


const LostPage = () => {
  return (
    <>
      <div className="row">
        <Col sm={6}>
          <Image style={{ height: '80vmin' }} className="img" src={logo} roundedCircle />
        </Col>
        <Col>
          <Col>
            <h1 className="mid"> Ooops, you seem lost!</h1>
            <Link to="/">
              <Button className="Button" variant="primary" size="lg" active>
                Return Home
              </Button>{' '}
            </Link>

            <Link to="/newreleases">
              <Button className="Button" variant="primary" size="lg" active>
                Latest Films
              </Button>{' '}
            </Link>

            <Link to="/bookings">
              <Button className="Button" variant="primary" size="lg" active>
                Book Tickets
              </Button>{' '}
            </Link>


            <Link to="/contact">
              <Button className="Button" variant="primary" size="lg" active>
                Contact Us
              </Button>{' '}
            </Link>
          </Col>
        </Col>
      </div>


    </>
  );
};

export default LostPage;