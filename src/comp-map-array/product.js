import React from 'react';

function Product(props) {
  console.log(props);
  return (
    <div>
      <h2>Name: {props.product.name}</h2>
      <p>${props.product.price}</p>
      <p>Description:{props.product.description}</p>
    </div>
  );
}

export default Product;