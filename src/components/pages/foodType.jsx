import React from 'react'
import Tags from '../tags';
import Foodtypecheck from '../foodtypeCheckbox';

import bn from '../../utilities/bemnames';
import MainLayout from '../Layout/MainLayout';
const bem = bn.create('foodtype');
const Foodtype = () => (
    <MainLayout beforeLink="/rooms" afterLink="/facilities" linknum="5"> 
        <div className={bem.e("foodtype_header")}>
            <h2>Food type</h2>
        </div>
        <div className={bem.e("foodtype_content")}>
            <h3>food by types</h3>
            <div className={bem.e("foodtype_wrapper")}>
                <span className={bem.e("foodtype_text")}><Foodtypecheck name="veg" /></span>
                <span className={bem.e("foodtype_text")}><Foodtypecheck name="non veg" hoverColor='red' /></span>
            </div>
            <h3>Food by region</h3>
            <div className={bem.e("foodtype_wrapper")}>
                <span className={bem.e("foodtype_text")}><Foodtypecheck name="south indian" /></span>
                <span className={bem.e("foodtype_text")}><Foodtypecheck name="north indian" /></span>
                <span className={bem.e("foodtype_text")}><Foodtypecheck name="andhra" /></span>
                <span className={bem.e("foodtype_text")}><Foodtypecheck name="punjabi" /></span>
                <span className={bem.e("foodtype_text")}><Foodtypecheck name="chinese" /></span>
            </div>
            <h3>Others</h3>
            <div className={bem.e("foodtype_tags")}>
                <Tags />
            </div>
        </div>
    </MainLayout>
);
export default Foodtype;