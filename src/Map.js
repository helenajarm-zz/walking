import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor(props){
    super(props);
    this.state={
      center:{
        lat: 37.7749,
        lng: -122.4194,
      },
    zoom: 11
    };
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCl_DAcHMRkIOzJP__cTn5kzZhPwmySO5A"}}
          center = {this.state.center}
          defaultZoom={this.state.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
