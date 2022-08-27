import React, { Component } from 'react'
import Footer from '../footer'
import Arrow from '../arrow'
import Slidebtn from '../slidebtn'
import bn from '../../utilities/bemnames';
const bem = bn.create('layout');


export default class MainLayout extends Component {
  componentDidMount(){
    console.log("before link:",this.props.beforeLink)
  }
  render() {
    return (
      <div className={bem.e("layout_body")}>
        <div className={bem.e("layout_container")}>
          <div className={bem.e("layout_box")}>
            <div className={bem.e("layout_head")}>
              <Slidebtn num={this.props.linknum}/>
            </div>
            <div className={bem.e("layout_content")}>
              {this.props.children}
            </div>
            <div className={bem.e("layout_foot")}>
              <Arrow  link={this.props.beforeLink} nextlink={this.props.afterLink}/>
            </div> 
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
