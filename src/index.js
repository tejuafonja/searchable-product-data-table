import React from 'react';
import ReactDOM from 'react-dom';
import { PRODUCTS } from './staticData'
import FilterableProductTable from './FilterableProductTable'


ReactDOM.render(<FilterableProductTable products={PRODUCTS}/>, document.getElementById('root'));
