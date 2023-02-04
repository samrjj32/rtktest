import React from "react";
import "./tab.css";
import { useNavigate, useLocation } from "react-router-dom";

const Tab = () => {
  let locaction = useLocation();
  let navigate = useNavigate();

  const handleClickTab = (path) => {
    navigate(path);
  };

  return (
    <div className="tab">
      <p
        className={`${locaction.pathname == "/" ? "active" : ""}`}
        onClick={() => handleClickTab("/")}
      >
        Home
      </p>
      <p>/</p>
      <p
        className={`${locaction.pathname == "/favorites" ? "active" : ""}`}
        onClick={() => handleClickTab("/favorites")}
      >
        Favorites
      </p>
    </div>
  );
};

export default Tab;
