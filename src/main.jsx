import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import RootContext from "./context/RootContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RootContext>
      <ToastContainer/>
      <App />
    </RootContext>
  </BrowserRouter>
);
