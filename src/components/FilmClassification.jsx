import Eighteen from './Classifications/Eighteen';
import Fifteen from './Classifications/Fifteen';
import PG from './Classifications/PG';
import TwelveA from './Classifications/TwelveA';
import Twelve from './Classifications/Twelve';
import U from './Classifications/U';
import { Nav, Col, Tab, Row } from 'react-bootstrap'
import "../css/ClassStyle.css";
import Info from './Classifications/Info';




const FilmClassification = () => {



  return (
    <>
      <div className="container">
        <h1 style={{ color: 'red', textAlign: 'center', paddingTop: '5vmin' }}> Film Classification</h1>
        <hr />
        <br />
        <br />
      </div>

      <div className="container" maxWidth="5000px" paddingTop="300px">

        <Tab.Container id="middle-tabs-example" defaultActiveKey="Info">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="goldenB" eventKey="Info">Info</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="goldenB" eventKey="U">U</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="goldenB" eventKey="PG">PG</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="goldenB" eventKey="12U">12U</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="goldenB" eventKey="12A">12A</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="goldenB" eventKey="Fifteen">Fifteen</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="goldenB" eventKey="Eighteen">Eighteen</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>


            <Col sm={9}>
              <Tab.Content>

                <Tab.Pane eventKey="Info">
                  <Info />
                </Tab.Pane>

                <Tab.Pane eventKey="U">
                  <U />
                </Tab.Pane>

                <Tab.Pane eventKey="PG">
                  <PG />
                </Tab.Pane>


                <Tab.Pane eventKey="12U">
                  <Twelve />
                </Tab.Pane>


                <Tab.Pane eventKey="12A">
                  <TwelveA />
                </Tab.Pane>

                <Tab.Pane eventKey="Fifteen">
                  <Fifteen />
                </Tab.Pane>


                <Tab.Pane eventKey="Eighteen">
                  <Eighteen />
                </Tab.Pane>


              </Tab.Content>
            </Col>






          </Row>
        </Tab.Container>

      </div>


    </>

  )


}



export default FilmClassification;