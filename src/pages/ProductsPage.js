import React from "react";
import { selectedItems } from "../features/itemsSlice";
import { useSelector } from "react-redux";
import { PageHeader, Divider } from "antd";

const ProductsPage = () => {
  const items = useSelector(selectedItems);
  return (
    <div>
      <div></div>
      <PageHeader
        className="site-page-header"
        title={`${items.length} Items found in Inventory`}
      />
      {items?.map((item, index) => (
        <li key={index}>
          {" "}
          {item.productName} <Divider />
        </li>
      ))}
    </div>
  );
};

export default ProductsPage;
