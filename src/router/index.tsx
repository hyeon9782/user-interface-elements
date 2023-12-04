import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("../pages/HomePage"));
const Shopping = lazy(() => import("../pages/ShoppingPage"));
const Modal = lazy(() => import("../pages/ModalPage"));
const Tab = lazy(() => import("../pages/TabPage"));
const Form = lazy(() => import("../pages/FormPage"));
const Accordion = lazy(() => import("../pages/AccordionPage"));
const Payment = lazy(() => import("../pages/PaymentPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/tab" element={<Tab />} />
        <Route path="/form" element={<Form />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
