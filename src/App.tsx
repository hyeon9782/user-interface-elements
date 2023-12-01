import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router";
import Header from "./components/layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
