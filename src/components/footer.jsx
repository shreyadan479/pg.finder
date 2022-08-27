import React from 'react'

import bn from '../utilities/bemnames';
const bem = bn.create('footer');
const Footer = () => (
    <div>
        <div className ={bem.e("footer_wrapper")}>
       <h5>Design & Developed by <span className={bem.e("footer_net")}>NET</span><span className={bem.e("footer_art")}>ART</span></h5>
        </div>
    </div>
)
export default Footer;