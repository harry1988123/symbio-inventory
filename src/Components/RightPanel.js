import React from "react";
import "../Styles/right-panel.css";
import { useSelector } from "react-redux";
import { selectedActiveTab } from "../features/activeTabSlice";
import AddNewItemPage from "../pages/AddNewItemPage";
import ProductsPage from "../pages/ProductsPage";
import ItemArchivesPage from "../pages/ItemArchivesPage";
import CategoriesPage from "../pages/CategoriesPage";

const RightPanel = () => {
  const activeTab = useSelector(selectedActiveTab);
  const setPage = (activeTab) => {
    if (activeTab === "1") {
      return <AddNewItemPage />;
    } else if (activeTab === "2") {
      return <ProductsPage />;
    } else if (activeTab === "3") {
      return <CategoriesPage />;
    } else if (activeTab === "4") {
      return <ItemArchivesPage />;
    } else {
      return <AddNewItemPage />;
    }
  };
  return <div className="right-panel">{setPage(activeTab)}</div>;
};

export default RightPanel;
