import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appearls from "./views/Appearls";
// import Appearls from "./views/Appearls";
import HomePage from "./views/HomePage";
import NotFound404 from "./views/NotFound404";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<Appearls />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
