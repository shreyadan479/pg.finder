import React, { Component } from 'react'
import Geocode from "react-geocode";

const propTypes = {};
 
 const defaultProps = {
  center:{lat:0.0,lng:0.0}

 };
 
export default class GeoCode extends Component {
getData(){
    console.log("clicked");
    Geocode.setApiKey("AIzaSyCYnKzNtcTBu-2a_WIwKP9Np0ClhWY0Zfc");
    Geocode.fromLatLng(11.0499729,76.98352229999999 ).then(
        
        response => {
            console.log("clicked1");
          var address = response.results[0].formatted_address;
          console.log("address",address);
          alert(address);  
        },
        error => {
          console.error(error);
        }
      );
}
  render() {
    return (
      <div>
        <textarea id="address_wrapper"></textarea>
         <button onClick={()=>this.getData()}>Try the location</button>
      </div>
    )
  }
}
Location.propTypes = propTypes;
Location.defaultProps = defaultProps;                       