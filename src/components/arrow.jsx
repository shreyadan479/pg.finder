import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import bn from '../utilities/bemnames';
const bem = bn.create('arrow');
export default class Arrow extends Component {
  render() {
    return (
      <div className={bem.e("arrows_wrapper")}>
        <div><Link to={this.props.link} className={bem.e("arrow_left")}><FontAwesomeIcon icon={faArrowAltCircleLeft} /></Link></div>
        <div><Link to={this.props.nextlink} className={bem.e("arrow_right")}><FontAwesomeIcon icon={faArrowAltCircleRight} /></Link></div>
      </div>
    )
  }
}


