import React, { useEffect, useState } from 'react';
import { Map, HeatMap, GoogleApiWrapper } from 'google-maps-react';
import "./GoogleHeatMap.css";

const style = {
    height: "400px",
    width: "95%"
}
// const examplePositions = [
// {lat: 39.94582270288439, lng: -75.17073607940675},
//  {lat: 39.949441731491355, lng: -75.14867759246827},
//  {lat: 39.945756900592116, lng: -75.1599214126587},
//  {lat: 39.94937593268011, lng: -75.14258361358644},
//  {lat: 39.943651193822156, lng: -75.15305495758058},
//  {lat: 39.95569232994611, lng: -75.15133834381105},
//  {lat: 39.94720453640199, lng: -75.17901874084474},
//  {lat: 39.94667812692452, lng: -75.18090701599122},
//  {lat: 39.94878374053064, lng: -75.18073535461427}
// ]

function GoogleHeatMap(props) {
    const { ratingData } = props;
    let positions = ratingData.map(item => {return {"lat": parseFloat(item.lat), "lng": parseFloat(item.lng)}});
    console.log(positions)

    
    // const [positions, setPositions] = useState(examplePositions);
    const gradient = ['rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ];
    // useEffect(_ => {
    //     setPositions(ratingData.map(item => {return {"lat": parseFloat(item.lat), "lng": parseFloat(item.lng)}}));
    //     console.log(positions)
    // }, [ratingData])
    

    return (
        <div>
            <Map
                style={style}
                google={props.google}
                zoom={13}
                initialCenter={{
                    lat: 39.9526,
                    lng: -75.1652
                }}
            >
                <HeatMap
                    opacity={0.3}
                    radius={20}
                    positions={positions}
                    gradient={gradient}
                // radius={1000}
                />
            </Map>
        </div>
    );
}
export default GoogleApiWrapper({
    // Maps API key
    apiKey: process.env.REACT_APP_MAPS_API,
    libraries: ['visualization']
})(GoogleHeatMap);