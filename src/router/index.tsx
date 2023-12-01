import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShoppingPage from "../pages/ShoppingPage";
import ModalPage from "../pages/ModalPage";
import TabPage from "../pages/TabPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shopping" element={<ShoppingPage />} />
      <Route path="/modal" element={<ModalPage />} />
      <Route path="/tab" element={<TabPage />} />
    </Routes>
  );
};

export default AppRoutes;
