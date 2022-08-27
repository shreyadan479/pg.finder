import React from 'react'

import bn from '../utilities/bemnames';
const bem = bn.create('foodbutton');
const Button1 = () => (
      <div>
            <div className={bem.e("foodbutton_wrap")}>
                  <div className={bem.e("foodbutton_btns")}>
                        <p className={bem.e("foodbutton_btn")}>NORTH INDIAN</p>
                  </div>
                  <div className={bem.e("foodbutton_btns")}>
                        <p className={bem.e("foodbutton_btn")}>SOUTH INDIAN</p>
                  </div>
            </div>
      </div>
)
export default Button1;

