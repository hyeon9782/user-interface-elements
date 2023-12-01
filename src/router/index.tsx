import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShoppingPage from "../pages/ShoppingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shopping" element={<ShoppingPage />} />
    </Routes>
  );
};

export default AppRoutes;
