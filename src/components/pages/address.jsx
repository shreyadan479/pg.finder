import React, { Component } from 'react'
//import Location from '../location'
import MainLayout from '../Layout/MainLayout';
import bn from '../../utilities/bemnames';
//import HomeComponent from '../currentAddress'
//import GeoCode from '../coordinates'
const bem = bn.create('address');

class Address extends Component{
  state= {
    lat:0.0,
    lon:0.0
  }
  getLocation =()=> {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("lati","not supported");
    }
    
  }
  
  showPosition = (position) => {
    this.setState({lat:position.coords.latitude,lon:position.coords.longitude})
    console.log ( "latitude", position.coords.latitude); 
    console.log("longi",position.coords.longitude); 
  }
  render(){
    return (
  <MainLayout beforeLink="/form" afterLink="/rooms" linknum="3">   
          <div className={bem.e("address_header")}>
          <h2>Basic info</h2>
          </div>
          <div className={bem.e("address_content")}>
              <div className ={bem.e("address_content_details")}>
                 <h3>Address</h3>
                       <textarea className={bem.e("address_name")} placeholder="37 A, lilly pond
                          complex,
                          moore market,
                          parktowm."></textarea>
              </div>
              <h3>Location on Maps</h3>
              <div className={bem.e("address_map")}>
                                                
              </div> 
              <button onClick={()=>this.getLocation()}>Try It</button>       
          </div>  
     </MainLayout>)
}
}
export default Address;