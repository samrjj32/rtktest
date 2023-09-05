import React from "react";
import ImageContainer from "../../components/ImageContainer";
import { useSelector, useDispatch } from "react-redux";
import "./favorites.css";

const Favorites = () => {
  const { data } = useSelector((state) => state.favorite);


  return (
    <div className="container">
      {data?.map((item, i) => {
        return (
          <div key={i}>
            <ImageContainer data={item}  />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
