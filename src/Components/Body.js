import React from "react";
import LeftMenu from "./LeftMenu";
import RightPanel from "./RightPanel";
import "../Styles/body.css";

const Body = () => {
  return (
    <div className="body">
      <LeftMenu />
      <RightPanel />
    </div>
  );
};

export default Body;
