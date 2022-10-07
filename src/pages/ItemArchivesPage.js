import React from "react";
import { Table, Image } from "antd";
import { useSelector } from "react-redux";
import { selectedItems } from "../features/itemsSlice";

const ItemArchivesPage = () => {
  const data = useSelector(selectedItems);
  const columns = [
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Product Name",
      dataIndex: "productName",
    },
    {
      title: "Price Per Unit",
      dataIndex: "pricePerUnit",
    },
    {
      title: "Image",
      dataIndex: "imageUrl",
      render: (t, r) => <Image src={`${t}`} width={50} />,
    },
  ];
  return (
    <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />
  );
};

export default ItemArchivesPage;
