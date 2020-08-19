import React, { useState, useEffect } from "react";
import { Container } from "../../components/Grid";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card, Modal, Nav,  } from 'react-bootstrap';
import styled from 'styled-components';
import { Redirect } from "react-router-dom";
import { List, ListItem } from "../../components/List";

import "../../pages/Map/Map"
import MapContainer from "./map";
import Image2 from "../../image/kelly-kiernan.jpeg";
import RenderCard from "../../components/Card";
import API from "../../utils/API";

const mapStyles = {
    width: '100%',
    height: '100%'
};

const Styles = styled.div`

    .row {
        width: 100%;
    }

    .jumbotron {
            position: relative;
            margin-top: 100px;
            padding-top: 0;
            padding-bottom: 0;
        }

    .test {
        margin-top: -100px;
        width: 100%;
    }
    .cardInfo {
        font-family: Frutiger;
        font-size: 20px;
        // text-shadow: -1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;
        width: 100% !important;
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
    //     width: 400px;
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

    
    .tab {
        background-color: #F8F8FF !important;
        border-radius: 4px !important;
    }

    .bod {
        margin: 10px;
    }

    .resp {
        margin-top: 20px;
    }

    h2 {

    }
`

 const backgroundStyle = {
        "backgroundColor": "#F5F5F5"
    }




export default function Home (props) {
    // const [redirect, setRedirect] = useState(false)
    // useEffect(() => {
    //     if (props.loggedIn == false){
    //         props.setRedirect("/login")
    //     }
    // }, [])

    // const renderRedirect= () => {
    //     if (redirect == true){
    //         return <Redirect to="/"/>
    //     }
    // }
    const [show, setShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    const handleClose = () => setLgShow(false);


    const [posts, setPosts] = useState({
        results: []
    })


    useEffect(() => {
        loadPosts()
    }, [])

    function loadPosts() {
        API.getPosts()
            .then(res => setPosts(res.data))
            .then(console.log("posts", posts))
            .catch(err => console.log(err));
    };





    return (
    <>
    <Styles style={backgroundStyle}>




    <Container fluid className="test">
    {props.renderRedirect()}

    <NavBar handleLogout={props.handleLogout}/>     

        <h2>Public Feed</h2>
        
        {posts.length ? (
                <div className="row">
                    {posts.map(post => {
                    console.log(post);
                        return (
                            <div className="row">
                                <Card className="card cardInfo border-dark">
                                <Card.Body className="bod">
                                    <div className="row">
                                        <div className="col">
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
                                    <div className="col resp">
                                            <Card.Text >
                                                
                                                <p><strong>User: </strong>{post._id}</p>
                                                   
                                            </Card.Text>
                                            <Card.Text key={post._id}>
                                                
                                                <p><strong>Description: </strong>{post.description}</p>
                                                   
                                            </Card.Text>
                                            <Card.Text>
                                                    <strong>
                                                    {post.lng}
                                                    </strong>
                                            </Card.Text>
                                            <Card.Text>
                                                    <strong>
                                                    {post.lat}
                                                    </strong>
                                            </Card.Text>
                                            <Card.Text>
                                                    <p><strong>Officer Badge Number: </strong>{post.badgeNumber}</p>
                                            </Card.Text>
                                            <Card.Text>
                                                    <p><strong>Date: </strong>{post.date}</p>
                                            </Card.Text>
                                    </div>     
                                    </div> 

                                </Card.Body>
                                </Card>
                            </div>
                        );
                    })}
                </div>
                 ) : (
                    <div>
                          <h3>No Results to Display</h3>
                    </div>
                      
    
                )}


        <Footer />
    </Container>
    </Styles>
    </>

    )
}
