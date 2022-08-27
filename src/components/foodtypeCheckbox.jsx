import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import bn from '../utilities/bemnames';
const bem = bn.create('checkbox');
const propTypes = {};
const defaultProps = {
  name: PropTypes.string,
  hoverColor: "green"
};
export default class Foodtypecheck extends React.Component {
  render() {
    return (
      <div>
        <label className={bem.e("Checkbox_Container")}>
          <input type="checkbox" name="radio" />
          <span className={classnames(bem.e("checkbox_checkmark"),bem.e("checkbox_text"))} >{this.props.name}</span>
        </label>
      </div>
    );
  }
}
Foodtypecheck.propTypes = propTypes;
Foodtypecheck.defaultProps = defaultProps;
