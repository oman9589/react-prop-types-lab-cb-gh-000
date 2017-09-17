import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li> {this.props.name} </li>
          <li> {this.props.producer} </li>
          <li> {this.props.hasWatermark} </li>
          <li> {this.props.color} </li>
          <li> {this.props.weight} </li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {

  function weightRange(props, propName, componentName) {
    if (typeof props[propName] === 'int') {
      if (props[propName] < 80 || props[propName] > 180) {
        return new Error(propName + ' in ' + componentName + " is longer not within weight limit");
      }
    }
    return null;
  }
  
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.weightRange.isRequired,
}

export default Product;
