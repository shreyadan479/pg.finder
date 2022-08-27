import React from 'react'
import Roomshare from '../roomShare'
import MainLayout from '../Layout/MainLayout';
import bn from '../../utilities/bemnames';
const bem = bn.create('rooms');
const Rooms = () => (
    <MainLayout beforeLink="/address" afterLink="/foodType" linknum="4">
        <div className={bem.e("rooms_header")}>
            <h2>Room sharing</h2>
        </div>
        <div className={bem.e("rooms_content")}>
            <h3>room types and costs</h3>
            <Roomshare />
        </div>
    </MainLayout>
);
export default Rooms;