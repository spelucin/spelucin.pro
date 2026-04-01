
  import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./i18n"; // Import i18n configuration
import App from "./app/App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


  