import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContextProvider";

const Detail = () => {
  const { Photoid } = useParams();
  const { getOnePhoto, forOnePhoto } = useProductContext();

  useEffect(() => {
    getOnePhoto(Photoid);
  }, []);

  return (
    <div>
      {forOnePhoto ? (
        <>
          <img src={forOnePhoto.urls.full} alt="" />
        </>
      ) : (
        console.log("error")
      )}
    </div>
  );
};

export default Detail;
