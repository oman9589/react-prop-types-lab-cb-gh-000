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
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    if (!props[propName]) {
      window.alert('noo');
      return new Error();
    } elseif (typeof props[propName] !== 'number') {
      window.alert('noo');
      return new Error();
    } elseif (props[propName] < 80 || props[propName] > 300) {
      window.alert('noo');
      return new Error();
    }
  },
}

export default Product;
