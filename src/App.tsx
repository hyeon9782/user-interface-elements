import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router";
import Header from "./components/layout/Header";
import ToastProvider from "./provider/ToastProvider";
import ModalProvider from "./provider/ModalProvider";

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <ModalProvider>
          <Header />
          <AppRoutes />
        </ModalProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
