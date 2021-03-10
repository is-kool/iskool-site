import React, { useState } from "react";

const Product = ({ product }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="product-card">
      <div>
        <img className="product-avatar" src={product.avatar} />
      </div>
      <div>
        <p className="product-title">{product.title}</p>
        <p
          className={`product-description ${isCollapsed && `collapsed`}`}
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
        <a className="read-more" onClick={toggleCollapsed}>
          {isCollapsed ? <span>Read more</span> : <span>Less more</span>}
        </a>
      </div>
    </div>
  );
};

export default Product;
