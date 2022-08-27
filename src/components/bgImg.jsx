import React from 'react'

import bn from '../utilities/bemnames';
const bem = bn.create('bgimg');
const Bgimg = () => (
    <div>
        <div className={bem.e("bgimg_image")}></div>
    </div>
)
export default Bgimg