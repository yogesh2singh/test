import PropTypes from "prop-types";
import React, { Component } from "react";

import {
  Map,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

const MyPopupMarker = ({ children, position }) => (
  <Marker position={position}>
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
);

const MyMarkersList = ({ markers }) => {
  
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ));
  return <div style={{ display: "none" }}>{items}</div>;
};
MyMarkersList.propTypes = {
  markers: PropTypes.array.isRequired
};

export default class CustomMap extends Component {
  state = {
    lat: 18.5247663,
    lng: 73.7929271,
    zoom: 13,
    markers: []
  };

  render() {
    console.log('Custom Map', this.props);
    if(this.props && this.props.markerValue) {
      this.state.markers = [this.props.markerValue];
      console.log('state ', this.state);
    }
    const center = [this.state.lat, this.state.lng];
    let latLng = this.state.markers[0].split(",");
    let lat = latLng[0];
    let lng = latLng[1];
    console.log('this.state.markers ', parseInt(this.state.markers));
    const markers = [
      {
        key: "marker1",
        position: [lat, lng],
        children: "Pune"
      }
    ];
    return (
      <Map center={center} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={markers} />
      </Map>
    );
  }
}
