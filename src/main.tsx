import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NewForm from "./components/ui/NewForm";
import { VehicleProvider } from "./components/ui/FormContext";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VehicleProvider>
      <NewForm />
    </VehicleProvider>
  </StrictMode>,
);
