import React  from 'react'

import bn from '../utilities/bemnames';
const bem = bn.create('forms');
const Form = () => (
    <div className="forms_wrapper">
        <div>
            <h4 className={bem.e("forms_head")}>PG name </h4>
            <div className={bem.e("forms_input")}>
                <input className={bem.e("forms_name")} type="text" placeholder="Sanjay's PG" />
            </div>
        </div>
        <div>
            <h4 className={bem.e("forms_head")}>owner name</h4>
            <div className={bem.e("forms_input")}>
                <input className={bem.e("forms_name")} type="text" placeholder="Sanjay's PG" />
            </div>
        </div>
        <div>
            <h4 className={bem.e("forms_head")}>pg phone number</h4>
            <div className={bem.e("forms_input")}>
                <input className={bem.e("forms_name")} type="number" placeholder="7010327904" />
            </div>
        </div>
        <div>
            <h4 className={bem.e("forms_head")}>pg whatsapp number</h4>
            <div className={bem.e("forms_input")}>
                <input className={bem.e("forms_name")} type="number" placeholder="7010327904" />
            </div>
        </div>
        <div>
            <h4 className={bem.e("forms_head")}>owner mail(for contact)</h4>
            <div className={bem.e("forms_input")}>
                <input className={bem.e("forms_name")} type="mail" placeholder="ng592910@gmail.com" />
            </div>
        </div>
    </div>

)
export default Form;