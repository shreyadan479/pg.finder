import React from 'react'
import Form from '../form'
import MainLayout from '../Layout/MainLayout';
import bn from '../../utilities/bemnames';
const bem = bn.create('form');
const Forms = () => (
    <MainLayout beforeLink="/" afterLink="/address" linknum="2">
        <div className={bem.e("form_header")}>
            <h2>Basic info</h2>
        </div>
        <div className={bem.e("form_content")}>
            <Form />
        </div>
    </MainLayout>
);
export default Forms;
