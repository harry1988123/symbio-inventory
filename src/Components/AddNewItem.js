import React from "react";

const AddNewItem = ({ onClick, data_id }) => {
  return (
    <div onClick={onClick} data_id={data_id}>
      Add New Item
    </div>
  );
};

export default AddNewItem;
