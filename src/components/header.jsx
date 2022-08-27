import React from "react";
import Popup from "reactjs-popup";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FaWhatsapp } from 'react-icons/fa';
import bn from '../utilities/bemnames';
const bem = bn.create('mainheader');
const Header = () => (
    <div>
        <div className={bem.e("hero_header")}>
            <div className={bem.e("header_logo")}>
                <FontAwesomeIcon icon={faCoffee} />
            </div>
            <div className={bem.e("header_text")}>
                <h1>HILL TOP GRAND SHIVA SAI RAJPUT FEAST PG</h1>
            </div>
            <div className={bem.e("header_button")}>
                <Popup trigger={<button className={bem.e("popup_btn")}>Contact PG</button>} position="bottom right">
                    {close => (<div className={bem.e("popup_content")}>
                        <div className={bem.e("popup_whatsapp")}>
                            <h3><span className={bem.e("popup_icon")}><FaWhatsapp /></span>whatsapp</h3>
                            <a href=" https://wa.me/+91 7010327904">7010 327 904</a>
                        </div>
                        <div className={bem.e("popup_mbl")}>
                            <h3><span className={bem.e("popup_icon")}><FontAwesomeIcon icon={faPhone}/></span>call</h3>
                            <a href="tel:+91 7010327904">7010 327 904</a>
                        </div>
                    </div>
                    )}
                </Popup>
            </div>
        </div>
    </div>
)
export default Header