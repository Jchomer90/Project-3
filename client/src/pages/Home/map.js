import React from 'react';
import { Map, GoogleApiWrapper, Container } from 'google-maps-react';
import GoogleHeatMap from "../../components/GoogleHeatMap";

// const containerStyles = {
//     width: '90%',
//     height: 'auto'
// }

const mapStyles = {
  width: '90%',
  height: '700px'
};

function MapContainer (props) {
    return (
        
        <Map
            google={props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
            lat: props.lat || -1.2884,
            lng: props.lng || 36.8233
            }}
        />
    );
}

export default GoogleApiWrapper({
// Maps API key
    apiKey: process.env.REACT_APP_MAPS_API
})(MapContainer);