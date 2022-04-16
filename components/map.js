import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import styled from 'styled-components';

const marker = { lat: 53.338, lng: -6.323 };
const key = 'AIzaSyCSQYFzAOXRSA3QmdjtiKtsKwM4uE3KXrM';

const mapStyles = [
  {
    "featureType":"all",
    "elementType":"labels.text",
    "stylers":[
      {
        "color":"#878787"
      }
    ]
  },
  {
    "featureType":"all",
    "elementType":"labels.text.stroke",
    "stylers":[
      {
        "visibility":"off"
      }
    ]
  },
  {
    "featureType":"landscape",
    "elementType":"all",
    "stylers":[
      {
        "color":"#f9f5ed"
      }
    ]
  },
  {
    "featureType":"road.highway",
    "elementType":"all",
    "stylers":[
      {
        "color":"#f5f5f5"
      }
    ]
  },
  {
    "featureType":"road.highway",
    "elementType":"geometry.stroke",
    "stylers":[
      {
        "color":"#c9c9c9"
      }
    ]
  },
  {
    "featureType":"water",
    "elementType":"all",
    "stylers":[
      {
        "color":"#aee0f4"
      }
    ]
  }
]

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={marker}
    defaultOptions={{ styles: mapStyles, disableDefaultUI: true }}
  >
    <Marker position={marker}/>
  </GoogleMap>
));

export default (props) => {
  return (
    <Map
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%`}} />}
      containerElement={<div style={{ height: `400px`}} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}