import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.component {
  render() {
    return (
      <ul>
        <li> {this.props.name} </li>
        <li> {this.props.producer} </li>
        <li> {this.props.hasWatermark} </li>
        <li> {this.props.color} </li>
        <li> {this.props.weight} </li>
      </ul>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {

}

export default Product;
