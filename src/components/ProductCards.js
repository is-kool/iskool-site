import React from 'react';
import Product from './Product';
import './ProductCards.css';

const ProductCards = ({ data }) => {
  return (
    <>
      <div className="products-container">
        <div className="products-card">
          {
            data.map((product, index) => {
              return (
                <Product product={product} key={index} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default ProductCards;