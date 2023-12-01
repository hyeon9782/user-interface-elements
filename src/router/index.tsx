import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShoppingPage from "../pages/ShoppingPage";
import ModalPage from "../pages/ModalPage";
import TabPage from "../pages/TabPage";
import FormPage from "../pages/FormPage";
import AccordionPage from "../pages/AccordionPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shopping" element={<ShoppingPage />} />
      <Route path="/modal" element={<ModalPage />} />
      <Route path="/tab" element={<TabPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/accordion" element={<AccordionPage />} />
    </Routes>
  );
};

export default AppRoutes;
