import React, { Component } from 'react'

export default class Location extends Component {
  function initMap(){
    // Map options
    var options = {
      zoom:8,
      center:{lat:42.3601,lng:-71.0589}
    }

    // New map
    var map = new google.maps.Map(document.getElementById('Map'), options);
     // Add marker
    var marker = new google.maps.Marker({
      position:{lat:42.3601,lng:-71.0589},
      map:map
    });
   }
  render() {
    
    return (
      <div>
        <div id="Map"></div>
        <script>
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKvP6Mfa-akUkSHrfi2Uol2or7p16TrRM&callback=initMap">
        </script>
      </div>
    )
  }
}
<Location center={{lat:this.state.lat,lng:this.state.lon}} />