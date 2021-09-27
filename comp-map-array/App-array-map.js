/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a Product /> component (which you'll also need to create) for each
product in the list.
Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/
import React from 'react';
import productsData from './comp-map-array/vschoolproducts';
import product from './comp-map-array/product';


function App() {
    const productComponents = productsData.map(item => 
  <product key={item.id} product={item}/>)
      
      return (
        <div>
          {productComponents}
        </div>
      ) 
}

export default App
