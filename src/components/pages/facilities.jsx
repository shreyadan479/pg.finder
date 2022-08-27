import React from 'react';
import Facilities from '../facilities';
import MainLayout from '../Layout/MainLayout';
import bn from '../../utilities/bemnames';
const bem = bn.create('facilities');
// const bem =bn.create("facility");

const Address = () => (
    <MainLayout beforeLink="/foodType" afterLink="/pictures" linknum="6"> 
        <div className={bem.e("facilities_header")}>
            <h2>Facilities</h2>
        </div>
        {/* bem.e("title") */}
        <div className={bem.e("facilities_content")}>   
            <h3>Furnishing</h3>
            <div><Facilities /></div>
            <h3>security</h3>
            <div><Facilities /></div>
            <h3>features</h3>
            <div><Facilities /></div>
            <h3>Others</h3>
            <div className="facilities_textarea">
                <textarea placeholder="Add others facilities if applicaple"></textarea>
            </div>
        </div>
    </MainLayout>
);
export default Address;