import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
const HomeScreen = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/products");
      setProduct(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>List Product</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slung}>
            <Link to={`/product/${product.slung}`}>
              <img src={product.images} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slung}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
