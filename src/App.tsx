import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router";
import Header from "./components/layout/Header";
import ToastProvider from "./provider/ToastProvider";

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Header />
        <AppRoutes />
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
