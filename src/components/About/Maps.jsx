import { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class Maps extends Component {
    render() {
        return(
            <Map google={this.props.google} zoom={14}>
 
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
     
            <InfoWindow onClose={this.onInfoWindowClose}>

            </InfoWindow>
          </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDZ1LEyOEKj9cPGSZG6lsTrTwRtpTQTq8c")
  })(Maps)