import React from "react";
import { useSelector } from "react-redux";

function ProductsPage() {
  const { singleProduct, isLoading, error, products } = useSelector(
    (state) => state.productStore
  );
  return (
    <div className="flex flex-col items-center">
      <h2>{singleProduct.title}</h2>
      <h4>{singleProduct.desc}</h4>
      <h5>{singleProduct.price}</h5>
      <div>
        {!error ? (
          products.map((el, i) => {
            return <div key={i}>{el.title}</div>;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
