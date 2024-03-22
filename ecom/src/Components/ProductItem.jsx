
import React from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductItem = ({ image, title, category, price, addToCart, loading }) => {
  if (loading) {
    // Render skeleton loading while data is being fetched
    return (
      <div className="grid-container">
        <div className="image">
          <Skeleton height={200} width={200} />
        </div>

        <h4>
          <Skeleton width={100} />
        </h4>

        <div className="bt">
          <p className="info">
            <Skeleton width={50} />
          </p>
          <Skeleton width={100} height={40} />
        </div>
      </div>
    );
  }

  // Render actual product data
  return (
    <div className="grid-container">
      <div className="image">
        <img src={image} alt={title} />
      </div>

      <h4>
        <span>Category : </span>
        {category}
      </h4>

      <div className="bt">
        <p className="info">
          <span>Price :</span>${price}
        </p>
        <button className="card-btn" onClick={addToCart}>
          <span>
            <FaCartArrowDown style={{ marginRight: "0.5em" }} />
          </span>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default React.memo(ProductItem);
