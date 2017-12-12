// Code Product Component Here
// Code Goes Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component{
   render(){
     return(
       <div className="product">
         <ul>
         </ul>
       </div>
     )
   }
 }

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: (props, propName) => {
    const weight = props[propName]

    if (weight === undefined) {
      return new Error('The weight prop is required.')
    }

    if (isNaN(weight)) {
      return new Error('The weight prop needs to be a number.')
    }

    const range = (weight > 80) && (weight < 300)

    if (!range){
      return new Error('The weight prop needs to be between 90 and 300.')
    }
  }

};

export default Product
