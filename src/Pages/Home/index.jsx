import React, { useCallback, useEffect } from "react";
import ImageContainer from "../../components/ImageContainer";
import { useSelector, useDispatch } from "react-redux";
import "./home.css";
import { addToFav, fetchGalleryImages } from "../../redux/slice/gallerySlice";
import Loader from "../../components/Loader";

const Home = () => {
  const { data, loading } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.length == 0) {
      dispatch(fetchGalleryImages());
    }
  }, []);

  const handleClickLike = useCallback(
    (item) => {
      dispatch(addToFav(item));
    },
    [addToFav]
  );

  return (
    <div className="container">
      {loading == true ? (
        <Loader />
      ) : (
        <>
          {data?.map((item, i) => {
            return (
              <div key={i}>
                <ImageContainer data={item} onClick={handleClickLike} />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Home;
