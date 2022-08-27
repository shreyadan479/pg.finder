import React from 'react'

import bn from '../utilities/bemnames';
const bem = bn.create('foodtypebtn');
const Button2 = () => (
  <div>
    <div className={bem.e("foodtypebtn_wrap")}>
      <div className={bem.e("foodtypebtn_type")}>
        <p className={bem.e("foodtypebtn_veg")}>Veg</p>
      </div>
      <div className={bem.e("foodtypebtn_type")}>
        <p className={bem.e("foodtypebtn_nonveg")}>Non Veg</p>
      </div>
    </div>
  </div>
)
export default Button2;
