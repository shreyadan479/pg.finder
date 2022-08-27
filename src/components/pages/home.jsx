import React, { Component } from 'react'
 import MainLayout from '../Layout/MainLayout'
import bn from '../../utilities/bemnames';
const bem = bn.create('home');
export default class Home extends Component {
  render() {
    return (
      <MainLayout beforeLink="/details" afterLink="/form" linknum="1"> 
      
          <div className={bem.e("home_header")}>
            <h2>Welcome to</h2>
            <h1 className={bem.e("home_highlight")}>twigs</h1>
          </div>
          <div className={bem.e("home_content")}>
            <p>Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example. ...
                The text is derived from Cicero's De finibus bonorum et malorum (On the Ends of Goods and Evils,
               sometimes the title is translated as [About] The Purposes of Good and Evil ).</p>
          </div>
             
       </MainLayout>
    )
  }
}

