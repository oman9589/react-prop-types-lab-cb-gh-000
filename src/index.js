import React from 'react';
import ReactDOM from 'react-dom';

import Product from './components/Product';

ReactDOM.render(
  <Product
    name="Dunder Mifflin"
    producer="PaperCo"
    color="white"
    weight={300} 
  />,
  document.getElementById('root')
);
