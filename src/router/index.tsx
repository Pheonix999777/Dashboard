import { Route, Routes, Navigate } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout/MainLayout";
import Home from "../modules/Home/Home";
import { NotFoundError } from "../modules/NotFound/NotFound";

export const Router = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFoundError />} />
      </Route>
    </Routes>
  );
};
