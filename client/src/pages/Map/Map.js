import React, { useEffect, useState } from "react";
import { Row, Container } from "../../components/Grid";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button, Modal, Col } from 'react-bootstrap';
import Form from "../../components/Form";
import MapContainer from "./MapContainer";
import GoogleHeatMap from "../../components/GoogleHeatMap";
// import MapsModal from "../../components/Modul";
import API from "../../utils/API";

function Map(props) {
    const [lgShow, setShow] = useState(false);
    const [latLng, setLatLng] = useState({ lat: 39.9526, lng: -75.1652 });
    const [badExperienceData, setBadExperienceData] = useState([{ lat: 123, lng: 123 }]);
    const [goodExperienceData, setGoodExperienceData] = useState([{ lat: 123, lng: 123 }]);

    const getLatLng = (coordinates) => {
        setLatLng(coordinates.latLng.toJSON());
    };

    const updateData = async () => {
        const response = await API.getPosts();

        const goodData = response.data.filter(submission => submission.experience == "Good");
        const badData = response.data.filter(submission => submission.experience == "Bad");
        // this is the problem. goodExperiencedata/bad are not being set.
        setGoodExperienceData(goodData);
        setBadExperienceData(badData);
        console.log(goodData)
        console.log(badData)
        console.log(goodExperienceData)
        console.log(badExperienceData)
    };
    // updateData();

    useEffect(_ => {
        updateData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = {
            description: form.get('description'),
            experience: form.get('experience'),
            badgeNumber: form.get('badge'),
            // file: form.get('file'),
            lat: latLng.lat,
            lng: latLng.lng,
            date: new Date
        };

        const body = {
            data: data,
            //update with real user id
            id: props.userId
        }
        // Ajax call
        console.log("THIS IS DATA :)")
        console.log(data);
        API.savePost(body).then(response => {
            setShow(false);
                updateData();
            // props.setRedirect("/home")
            console.log("Save Post", response)
        }).catch(err => {
            console.log(err)
        });
        // API.savePost(data).then(response => {
        //     console.log(response)
        // });

        // updateData(); cc not sure if we need this or not
    };

    return (
        <Container fluid>
            {props.renderRedirect()}
            <NavBar handleLogout={props.handleLogout} />
            <Row>
                <Button onClick={() => setShow(true)}>Submit Incident</Button>
            </Row>
            <Row>
                <Col><GoogleHeatMap ratingData={goodExperienceData} /></Col>
                <Col><GoogleHeatMap ratingData={badExperienceData} /></Col>
            </Row>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Incident Report
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form clicked={(target, map, coordinates) => { getLatLng(coordinates) }} positions={latLng} submit={e => { handleSubmit(e) }} />
                </Modal.Body>
            </Modal>
            <Footer />
        </Container>
    )
}
export default Map;
