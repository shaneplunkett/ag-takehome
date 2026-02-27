import { useContext } from "react";
import { createContext } from "react";

interface VehicleContext {
  make: string | null;
  model: string | null;
  badge: string | null;
  handleMakeChange: (make: string | null) => void;
  handleModelChange: (model: string | null) => void;
  handleBadgeChange: (badge: string | null) => void;
  handleSet: (
    make: string | null,
    model: string | null,
    badge: string | null,
  ) => void;
}

interface SelectItems {
  value: string | null;
  label: string;
}

export function createItems(value: string[]): SelectItems[] {}
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
    Ranger: ["Raptor", "Raptorx", "Wildtrak"],
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
