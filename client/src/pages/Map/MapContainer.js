import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  // position: 'relative',
  display: 'block',
  width: '100%',
  height: '100%'
};

function MapContainer(props) {
  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      onClick={props.clicked}
      initialCenter={{
        lat: props.positions.lat,
        lng: props.positions.lng
      }}>

      <Marker draggable={true} position={props.positions} />

    </Map>
  );
}

export default GoogleApiWrapper({
  // Maps API key
  apiKey: process.env.REACT_APP_MAPS_API,
})(MapContainer);