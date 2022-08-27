import React from 'react'

import { FaPhone } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import bn from '../utilities/bemnames';
import map from '../assets/images/map.png';

const bem = bn.create('contact');
const Contact = () => (
    <div> 
        <div className={bem.e("contact_wrapper")}>
            <div className={bem.e("contact_img")}>
                <img className={bem.e("contactimg_img")} src={map} alt="pgfinder-img"/>
            </div>
            <div className={bem.e("contact_details")}>
                <h3>Address</h3>
                <p className={bem.e("contact_address")}>37 A, lilly pond
                   complex, moore
                   market,
                          parktowm.</p>
                <div className={bem.e("contact_num")}>
                    <h3><span className={bem.e("contact_icons")}><FaWhatsapp /></span>whatsapp</h3>
                    <a href=" https://wa.me/+91 7010327904">7010 327 904</a>
                </div>
                <div className={bem.e("contact_num")}>
                    <h3><span className={bem.e("contact_icons")}><FaPhone /></span> call</h3>
                    <a href="tel:+91 7010327904">7010 327 904</a>
                </div>
                <div className={bem.e("contact_num")}>
                    <h3><span className={bem.e("contact_icons")}><FaEnvelopeOpenText /></span>mail</h3>
                    <p><a href="mailto:ng592910@gmail.com">ng592910
               @gmail.com</a></p>
                </div>
            </div>
        </div>
    </div>
)
export default Contact;