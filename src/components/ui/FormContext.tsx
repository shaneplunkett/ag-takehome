import { useState } from "react";
import { FacetContext } from "@/lib/useVehicle";
import type { PropsWithChildren } from "react";

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
