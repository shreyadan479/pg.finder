import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
const NumberOfCir = 7



export default class Slidebtn extends Component {
  GenerateCircle = () => {
    var arr = []
    for (var i = 0; i < NumberOfCir; i++) {
     arr.push(<div className="circle">
      <hr className={i >=this.props.num ? "line" : "lines"}></hr>
     <div className={i >= this.props.num ? "circles" : "circlesfill"}>
     </div>
     </div>)
    }   
 
    console.log("arr", arr)
    return arr;
    } 
  render() {
    return (
      <div className="circle1">
      {this.GenerateCircle()}                         
      </div>
    )
  }
}
