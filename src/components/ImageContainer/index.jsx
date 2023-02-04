import React, { memo } from "react";
import "./imgContainer.css";

const ImageContainer = memo(({ data, onClick }) => {
  return (
    <div className="imgContainer">
      <img src={data?.src?.portrait}></img>
      <div className="details">
        <h3>{data?.photographer}</h3>
        <i
          className="fa fa-thumbs-up like"
          style={{ color: data?.liked ? "red" : "white" }}
          onClick={(e) => onClick(data)}
        ></i>
      </div>
    </div>
  );
})

export default ImageContainer;
