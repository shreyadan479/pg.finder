import React from 'react'

import bn from '../utilities/bemnames';
const bem = bn.create('facilitiescomponent');
const features = [{label:'tv'},
{ label:'AC'},{label:'fridge'}];
   
export default function Facilities() {
    return (
    <div>
         <div className={bem.e("facilities_check")}>
                    {features.map(
                    (link) => {
                    return <div className={bem.e("facilities_checkbox")}>
                        <label className={bem.e("facilities_checkbox1")}>
                        <input type="checkbox"/>
                        <span className={bem.e("facilities_checkmark")}></span>
                        <div className={bem.e("facilities_label")}>{link.label}</div>
                        </label>                       
                     </div>
                       })}    
            </div>
    </div>
)
        }