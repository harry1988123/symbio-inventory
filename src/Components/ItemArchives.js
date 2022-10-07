import React from "react";

const ItemArchives = ({ onClick, data_id }) => {
  return (
    <div onClick={onClick} data_id={data_id}>
      Item Archives
    </div>
  );
};

export default ItemArchives;
