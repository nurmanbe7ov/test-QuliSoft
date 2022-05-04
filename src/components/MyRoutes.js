import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./Detail/Detail";
import GetPhoto from "./GetPhoto/GetPhoto.jsx";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GetPhoto />} />
      <Route path="/photos/detail/:Photoid" element={<Detail />} />
    </Routes>
  );
};

export default MyRoutes;
