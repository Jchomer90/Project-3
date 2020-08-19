import React, { useState } from "react";
import { Card, Modal, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';
import "../pages/Map/Map";
import MapContainer from "../pages/Home/map.js";

const mapStyles = {
    width: '100%',
    height: '100%'
};

const Styles = styled.div`

.cardInfo {
    font-family: Frutiger;
    font-size: 20px;
    // text-shadow: -1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;
    width: 90%;
    height: auto;
    background-color: #fff8f0ff;
    margin: 50px;
    color: #000;
    // margin-left: 5%;

}

.card:hover{
    transform: scale(1.02);
    box-shadow: 0 10px 20px rgba(0,0,0,.5), 0 4px 8px rgba(0,0,0,.06);
    opacity: 2.0;
}

.card-header {
    background: linear-gradient(to top left, #ffcf99ff 40%, #92140cff 90%);        border-radius: 10px !important;
}

.card {
    width: 100%;
    border-radius: 40px !important;
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 1px 6px rgba(0,0,0,.05);
}

.background {
    width: 100%;
    max-height: 530px;
}

.jumbotron {
        position: relative;
        margin-top: 100px;
        padding-top: 0;
        padding-bottom: 0;
    }

img {
    width: 100%;
    height: auto;
    border-radius: 10px !important;
    margin: 15px;
}

.imgTest {
    padding: 15px;
}

.tab {
    background-color: #F8F8FF !important;
    border-radius: 4px !important;
}
`
export default function RenderCard (props) {
    const [show, setShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    const handleClose = () => setLgShow(false);


    return (
        <>
        <Styles>
            <div className="row">
                <Card className="card cardInfo border-dark">
                <Card.Body >
                    <div className="row">
                        <div className="col-lg-12">
                            <Card.Header>
                            <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item className="tab">
                                <Nav.Link href="#first" className="tab">Incident Details</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link variant="primary" onClick={() => setLgShow(true)}>Map</Nav.Link>

                                <Modal
                                size="lg"
                                show={lgShow} 
                                onHide={() => setLgShow(false)} dialogClassName="modal-90w"  
                                aria-labelledby="example-custom-modal-styling-title"        
                                >
                                        <Container className="homeMap">
                                            <MapContainer 
                                            closeButton
                                            style={mapStyles}
                                            />
                                        </Container>
                            </Modal>
                            </Nav.Item>
                            </Nav>
                            </Card.Header>
                            </div>
                            

                        </div>

                        
                        <div className="row">
                        <div className="col-lg-8">
                        <Card.Title id="user"></Card.Title>
                        <Card.Text onInvalidCapture="description">{props.description}</Card.Text>
                        <Card.Text onInvalidCapture="badge"></Card.Text>
                        <Card.Text onInvalidCapture="experience"></Card.Text>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <div className="imgTest">
                            <img id="uploadedImg" src="https://via.placeholder.com/150" alt="userImage" />
                        </div>
                        </div>
                    </div> 
                </Card.Body>
                </Card> 
            </div>
        </Styles>
        </>
    )
}

