import { useContext } from "react";
import { createContext } from "react";

interface VehicleContext {
  make: string;
  model: string;
  badge: string;
  handleMakeChange: (make: string) => void;
  handleModelChange: (model: string) => void;
  handleBadgeChange: (badge: string) => void;
}

export const FacetContext = createContext<VehicleContext | null>(null);

export function useVehicleContext() {
  const context = useContext(FacetContext);
  if (!context)
    throw new Error("useVehicleContext must be used within VehicleProvider");
  return context;
}
