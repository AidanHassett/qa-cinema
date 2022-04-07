import { Card, Nav } from 'react-bootstrap/'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {


  return (
    <div className="footer">

      <br></br>
      <br></br>
      <Card style={{ borderColor: '#8ec3eb' }}>
        <Card.Body className="footer">
          <Card.Title style={{ color: 'blue' }} >QA Cinema</Card.Title>
          <Card.Text style={{ color: 'blue' }}> &copy;Welcome to the family!    </Card.Text>
          <Card.Text>
          </Card.Text>
          <Nav defaultActiveKey="/" as="ul" style={{ marginLeft: "42%" }}>
            <Nav.Item as="li" >
              <Nav.Link style={{ color: 'blue', marginLeft: '-1020px' }} href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link style={{ color: 'blue', marginLeft: '-1010px' }} eventKey="link-1" href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" style={{ color: 'blue', marginLeft: '-960px' }} href="/contact" >Contact Us</Nav.Link>
            </Nav.Item>
          </Nav>
          <row>
            <tb>  <FiTwitter size={25} id="twitter-footer" /> </tb>

            <tb>  <FiFacebook size={25} id="fb-footer" /></tb>

            <tb>  <FiInstagram size={25} id="instagram-footer" /></tb>


          </row>
          {/* <div className="footerTimes"> */}
          {/* 
          <Times style={{color: 'red'}}/> */}

          {/* </div> */}
        </Card.Body>

      </Card>

    </div>
  )
}

export default Footer