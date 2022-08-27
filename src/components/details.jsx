import React from 'react'
import roomimg from '../assets/images/pg.jpg';
import bn from '../utilities/bemnames';
const bem = bn.create('roomdetails');
const Details = () => (
    <div>
        <div className={bem.e("roomdetails_wrapper")}>
                <div className ={bem.e("roomdetails_img")}>
                     <img className={bem.e("roomdetails_pgimg")} src={roomimg} alt="roomimg"/>
                </div>
                <div className ={bem.e("roomdetails_lists")}>
                  <h3>Room sharing</h3>
                  <ul className = {bem.e("roomlists_details")}>
                    <li className={bem.e("roomdetails_roomlist")}>one</li>
                    <li className={bem.e("roomdetails_roomlist")}>two</li>
                    <li className={bem.e("roomdetails_roomlist")}>three</li>
                    <li className={bem.e("roomdetails_roomlist")}>three+</li>
                  </ul>
                </div>
                <div className ={bem.e("roomdetails_cost")}>
                  <h3>Rent per month</h3>
                  <ul className = {bem.e("roomlists_details")}>
                    <li>8000 ₹</li>
                    <li>5000 ₹</li>
                    <li>4000 ₹</li>
                    <li>3000 ₹</li>
                  </ul>
                </div>
         </div>
    </div>
)
export default Details;