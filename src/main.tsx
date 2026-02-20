import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NewForm from "./components/features/NewForm";
import { VehicleProvider } from "./components/features/FormContext";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VehicleProvider>
      <NewForm />
    </VehicleProvider>
  </StrictMode>,
);
