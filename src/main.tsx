import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FormContext from "./components/ui/FormContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormContext />
  </StrictMode>,
);
