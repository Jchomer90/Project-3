import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card, Modal, Nav, Button } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

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

.wrapper {
    padding: 15px;
}

.summary {
    font-style: italic;
}

`
function Resources(props) {
    const [lgShow, setLgShow] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <Styles>
        {props.renderRedirect()}
        <Container fluid>
            <NavBar handleLogout={props.handleLogout}/>
            <div className="row">
                <Card className="card cardInfo border-dark">
                <Card.Body >
                    <div className="row">
                        <div className="col-lg-12">
                            <Card.Header className="header">
                                <h2>
                                    Violent Crime dipped in Philly last week
                                </h2>
                            </Card.Header>
                        </div>
                        <div className="wrapper">
                            <Card.Text>
                                <p className="summary">
                                Long before the coronavirus pandemic reached the city, PANN was on the front lines of another crisis: gun violence. For the last three years, Philadelphia has seen an increase in homicides, with 356 people killed in the city in 2019, the highest number since 2007. The city has also been stuck in a bloody cycle of shootings, several of which landed innocent children in the hospital or a city morgue.
                                </p>
                            </Card.Text>
                            <Button href="https://whyy.org/articles/violent-crime-dipped-in-philly-last-week-anti-violence-advocates-want-it-to-last/"
                            target="_blank" variant="primary" onClick={() => setShow(true)}>
                            Full Story
                            </Button>
                        </div>
                    </div>
                </Card.Body>
                </Card>
            </div>
            <div className="row">
                <Card className="card cardInfo border-dark">
                <Card.Body >
                    <div className="row">
                        <div className="col-lg-12">
                            <Card.Header className="header">
                                <h2>
                                Gun violence hearings leave Philly councilmembers, residents ‘disheartened’ and ‘tired’
                                </h2>
                            </Card.Header>
                        </div>
                        <div className="wrapper">
                            <Card.Text>
                                <p className="summary">
                                During the second day of virtual emergency hearings called to address the rising gun violence, lawmakers spent more than an hour pressing leadership about the office’s $9.4 million budget, the outcomes of its anti-violence programming, and the metrics it uses to determine success. 
                                </p>
                            </Card.Text>
                            <Button href="https://whyy.org/articles/gun-violence-hearings-leave-philly-councilmembers-residents-disheartened-and-tired/"
                            target="_blank" variant="primary" onClick={() => setShow(true)}>
                            Full Story
                            </Button>
                        </div>
                    </div>
                </Card.Body>
                </Card>
            </div>
            <div className="row">
                <Card className="card cardInfo border-dark">
                <Card.Body >
                    <div className="row">
                        <div className="col-lg-12">
                            <Card.Header className="header">
                                <h2>
                                Philly DA files charges against man in fatal shooting of 7-year-old
                                </h2>
                            </Card.Header>
                        </div>
                        <div className="wrapper">
                            <Card.Text>
                            <p className="summary">
                            A 7-year-old Southwest Philadelphia boy struck in the head by a stray bullet over the weekend has died from his injuries. Zamar Jones was pronounced dead Monday at Children’s Hospital of Philadelphia, the District Attorney’s Office said.
                            </p>
                            </Card.Text>
                            <Button href="https://whyy.org/articles/philly-da-files-charges-against-man-involved-in-shooting-of-7-year-old/"
                            target="_blank" variant="primary" onClick={() => setShow(true)}>
                            Full Story
                            </Button>
                        </div>
                    </div>
                </Card.Body>
                </Card>
            </div>
         
            <Footer />
        </Container>
        </Styles>
    )
}

export default Resources;