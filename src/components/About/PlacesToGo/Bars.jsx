import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import beatone from "../../../res/beatone.jpg";
import kongs from "../../../res/kongs.jpg";
import peppermint from "../../../res/peppermint.jpg";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Bars = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [key, setKey] = useState('home');

    return (
        <>
            <button size={30} className="btn btn-outline-primary" onClick={toggle} id="bar-button">View Details</button>
            <Modal isOpen={modal}>
                <ModalHeader id="modal-header">
                    <h4>Bars</h4>
                </ModalHeader>
                <ModalBody id="modal-body">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab eventKey="home" title="Be At One">
                            <div className="row-md">
                                <br />
                                <center>
                                    <img src={beatone} alt="beatone" height="100%" width="75%" />
                                </center>
                                <br />
                                <p>Lively chain bar that serves sweet, sour and spicy cocktails, and offers mixing masterclasses.</p>
                                <p>Contact: 020 7738 2119</p>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Kongs">
                            <div className="row-md">
                                <br />
                                <center>
                                    <img src={kongs} alt="kongs" id="kongs" height="90%" width="75%" />
                                </center>
                                <br />
                                <p>Kongs comes armed with an array of classic 80's & 90's arcade games, where you can try to smash the top scores and earn your place on the leader board! We have Ping-Pong tables, foosball, pinball machines and a range of craft beers!</p>
                                <p>Contact: 029 2064 4114</p>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Peppermint">
                            <div className="row-md">
                                <br />
                                <center>
                                    <img src={peppermint} alt="peppermint" id="peppermint" height="80%" width="75%" />
                                </center>
                                <br />
                                <p>Happening venue for cocktails and music, with a daytime burger menu with sandwiches and pizza.</p>
                                <p>Contact: 029 2039 9199</p>
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
export default Bars;
