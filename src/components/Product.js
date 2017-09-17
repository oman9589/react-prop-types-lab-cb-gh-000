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

function weightRange(props, propName, componentName) {
  if (props[propName]) {
    let value = props[propName];

    // If no hidden label is set, children are required for accessibility
    if (!(typeof value === 'number')) {
      return new Error("Required prop '${propName}' was not specified in '${componentName}.");
    } else if (value < 80 || value > 300) {
      return new Error("Required prop '${propName}' was not specified in '${componentName}.");
    }
  }
  return null;
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightRange
}

export default Product;
