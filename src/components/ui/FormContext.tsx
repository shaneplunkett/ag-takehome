import { createContext } from "react";
import { useState } from "react";
import type { PropsWithChildren } from "react";

interface VehicleContext {
  make: string;
  model: string;
  badge: string;
  handleMakeChange: (make: string) => void;
  handleModelChange: (model: string) => void;
  handleBadgeChange: (badge: string) => void;
}

const FacetContext = createContext<VehicleContext | null>(null);

export function VehicleProvider({ children }: PropsWithChildren) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [badge, setBadge] = useState("");

  const handleMakeChange = (value: string) => {
    setModel("");
    setBadge("");
    setMake(value);
  };

  const handleModelChange = (value: string) => {
    setBadge("");
    setModel(value);
  };

  const handleBadgeChange = (value: string) => {
    setBadge(value);
  };

  return (
    <FacetContext.Provider
      value={{
        make,
        model,
        badge,
        handleMakeChange,
        handleModelChange,
        handleBadgeChange,
      }}
    >
      {children}
    </FacetContext.Provider>
  );
}

export default function FormContext() {
  return <div>Sup</div>;
}
