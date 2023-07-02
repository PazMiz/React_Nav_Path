import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  // Map configuration options
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 51.5074, // Latitude of the desired location
    lng: -0.1278, // Longitude of the desired location
  };

  const markers = [
    {
      position: {
        lat: 51.5074, // Latitude of marker 1
        lng: -0.1278, // Longitude of marker 1
      },
      title: 'Marker 1',
    },
    {
      position: {
        lat: 51.5072, // Latitude of marker 2
        lng: -0.1276, // Longitude of marker 2
      },
      title: 'Marker 2',
    },
    // Add more markers as needed
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyCwTx63mXpY88UXSelwaxWAN2ZYjpbLxOA">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            title={marker.title}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
