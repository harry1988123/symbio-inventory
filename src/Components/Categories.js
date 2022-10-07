import React from "react";

const Categories = ({ onClick, data_id }) => {
  return (
    <div onClick={onClick} data_id={data_id}>
      Categories
    </div>
  );
};

export default Categories;
