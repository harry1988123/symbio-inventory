import React from "react";
import { PageHeader } from "antd";
import "../Styles/layout.css";
import Body from "./Body";

const Layout = () => {
  return (
    <>
      <PageHeader className="site-page-header" title="Harendra Singh Inventory" />
      <Body />
    </>
  );
};

export { Layout };
