import React from "react";
import AddNewItem from "./AddNewItem";
import Products from "./Products";
import Categories from "./Categories";
import ItemArchives from "./ItemArchives";
import "../Styles/left-panel.css";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../features/activeTabSlice";
import { selectedActiveTab } from "../features/activeTabSlice";

const LeftMenu = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectedActiveTab);
  const handleClick = (event) => {
    const activeTab = event.target.getAttribute("data_id");
    dispatch(setActiveTab({ activeTab }));
  };
  return (
    <div className="left-panel" onClick={handleClick}>
      <div data_id="4" className={activeTab === "4" ? "row active" : "row"}>
        <ItemArchives data_id="4" />
      </div>
      <div data_id="2" className={activeTab === "2" ? "row active" : "row"}>
        <Products data_id="2" />
      </div>
      <div data_id="3" className={activeTab === "3" ? "row active" : "row"}>
        <Categories data_id="3" />
      </div>
      <div data_id="1" className={activeTab === "1" ? "row active" : "row"}>
        <AddNewItem data_id="1" />
      </div>
    </div>
  );
};

export default LeftMenu;
