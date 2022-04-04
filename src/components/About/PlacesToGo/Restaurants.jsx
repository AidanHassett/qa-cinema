import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Tgi from "../../../res/Tgi.jpg";
import nandos from "../../../res/nandos.jpg";
import pizzahut from "../../../res/pizzahut.jpg";

const Restaurants = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [key, setKey] = useState('home');

    return (
        <>
            <button size={30} className="btn btn-outline-primary" onClick={toggle} id="res-button">View Details</button>
            <Modal isOpen={modal}>
                <ModalHeader id="modal-header">
                    <h4>Restaurants</h4>
                </ModalHeader>
                <ModalBody id="modal-body">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab eventKey="home" title="TGI Fridays">
                            <div className="row-md">
                                <br />
                                <center>
                                    <img src={Tgi} alt="tgi-fridays" height="100%" width="75%" />
                                </center>
                                <br />
                                <p>
                                TGI Fridays is an American restaurant chain focusing on casual dining. The name is asserted to stand for "Thank God It's Friday", although as of 2010 some television commercials for the chain have also made use of the alternative phrase, "Thank Goodness It's Friday."
                                </p>
                                <p>Contact: 03331501300</p>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Nandos">
                            <div className="row-md">
                                <br />
                                <center>
                                    <img src={nandos} alt="nandos" id="nandos" height="90%" width="75%" />
                                </center>
                                <br />
                                <p>Nando's is a South African multinational fast food chain that specialises in flame-grilled peri-peri style chicken. Founded in Johannesburg in 1987, Nando's operates over 1,200 outlets in 30 countries. Their logo depicts the Rooster of Barcelos, one of the most common symbols of Portugal.</p>
                                <p>Contact: 020 3974 2182</p>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Pizza Hut">
                            <div className="row-md">
                                <br />
                                <center>
                                    <img src={pizzahut} alt="pizzahut" id="pizzahut" height="80%" width="75%" />
                                </center>
                                <br />
                                <p>Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. They serve their signature pan pizza and other dishes including pasta, breadsticks and desserts.</p>
                                <p>Contact: 0800 028 7034</p>
                            </div>
                        </Tab>
                    </Tabs>

                </ModalBody>
                <ModalFooter id="modalfooter">
                    <button onClick={toggle} className="btn btn-outline-danger">Go Back</button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default Restaurants;
