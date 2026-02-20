import { useContext } from "react";
import { createContext } from "react";

interface VehicleContext {
  make: string;
  model: string;
  badge: string;
  handleMakeChange: (make: string) => void;
  handleModelChange: (model: string) => void;
  handleBadgeChange: (badge: string) => void;
  handleSet: (make: string, model: string, badge: string) => void;
}

export const FacetContext = createContext<VehicleContext | null>(null);

export function useVehicleContext() {
  const context = useContext(FacetContext);
  if (!context)
    throw new Error("useVehicleContext must be used within VehicleProvider");
  return context;
}

export type ModelData = Record<string, string[]>;

export const MODELS: Record<string, ModelData> = {
  Ford: {
    Ranger: ["Raptor", "Raptorx", "wildtrak"],
    Falcon: ["XR6", "XR6 Turbo", "XR8"],
    "Falcon Ute": ["XR6", "XR6 Turbo"],
  },
  BMW: {
    "130d": ["xDrive 26d", "xDrive 30d"],
    "240i": ["xDrive 30d", "xDrive 50d"],
    "320e": ["xDrive 75d", "xDrive 80d", "xDrive 85d"],
  },
  Tesla: {
    "Model 3": ["Performance", "Long Range", "Dual Motor"],
  },
};
