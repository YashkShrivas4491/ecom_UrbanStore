
import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const Product = ({ addToCart }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const dataApi = await response.json();
      setData(dataApi);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    // Render loading skeleton
    return (
      <div className="grid-cont">
        {[...Array(10)].map((_, index) => (
          <ProductItem key={index} loading={loading} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid-cont">
      {data.map((product) => (
        <ProductItem
          key={product.id}
          image={product.image}
          category={product.category}
          title={product.title}
          price={product.price}
          addToCart={() => addToCart(product)}
          loading={loading}
        />
      ))}
    </div>
  );
};

export default Product;
