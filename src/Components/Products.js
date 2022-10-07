import React from "react";

const Products = ({ onClick, data_id }) => {
  return (
    <div onClick={onClick} data_id={data_id}>
      Products
    </div>
  );
};

export default Products;
