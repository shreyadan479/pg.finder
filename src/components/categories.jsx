import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import bn from '../utilities/bemnames';
const bem = bn.create('categories');
const features = [{label:'tv'},
{ label:'ac'},{label:'fridge'}];   
export default function Categories() {
    return (
    <div>
         <div className={bem.e("categories_content")}>
                    {features.map(
                    (link) => {
                    return <div className={bem.e("categories_label")}>
                    <span className={bem.e("categories_img")}><FontAwesomeIcon icon={faCoffee} /></span>
                    <p className={bem.e("categories_text")}>{link.label}</p>
                     </div>
                       })}    
            </div>
    </div>
)
        }