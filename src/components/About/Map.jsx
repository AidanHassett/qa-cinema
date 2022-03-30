import "../../css/AboutStyle.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import FindUs from "./FindUs";
import MeetTheTeam from "./MeetTheTeam";
import QACinemaInfo from "./QACinemaInfo";




const AboutPage = () => {
    return (
      <>
        <br className="br"></br>
        <br className="br"></br>
        <Container maxWidth="lg">
  
          <Container>
            <div className="row">
              <Col>
                {" "}
                <img src={logo} alt="My Logo" />
              </Col>
              <Col>
                <QACinemaInfo></QACinemaInfo>
              </Col>
            </div>
  
            <div className="row">
              <Col sm={6}>
                <FindUs></FindUs>
              </Col>
              <Col>
                <Col>
                  <Map></Map>
                </Col>
              </Col>
            </div>
  
            <PlacesToGoPage />
  
          </Container>
  
          <MeetTheTeam></MeetTheTeam>
        </Container>
  
  
      </>
    );
  };
  
  
  
  export default AboutPage;