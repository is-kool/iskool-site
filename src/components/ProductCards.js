import React from 'react';
import './ProductCards.css';

const ProductCards = ({ data }) => {
  return (
    <>
      <div class="products-container">
        <div class="products-card">
          {
            data.map((product, index) => {
              return (
                <div className="product-card" key={index}>
                  <div>
                    <img className="product-avatar" src={product.avatar} />
                  </div>
                  <div>
                    <p className="product-title">{product.title}</p>
                    <p class="product-description" dangerouslySetInnerHTML={{ __html: product.description }} />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default ProductCards;