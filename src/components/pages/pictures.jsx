import React from 'react'
import MainLayout from '../Layout/MainLayout';
import Upload from '../imgUpload';
import bn from '../../utilities/bemnames';
const bem = bn.create('pictures');
const Pictures = () => (
    <MainLayout beforeLink="/facilities" afterLink="/" linknum="7">
        <div className={bem.e("pictures_header")}>
            <h2>Pictures</h2>
        </div>
        <div className={bem.e("pictures_content")}>
         <Upload />
        </div>
    </MainLayout>
);
export default Pictures;