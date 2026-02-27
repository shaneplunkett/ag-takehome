import { useState } from "react";
import { FacetContext } from "@/lib/useVehicle";
import type { PropsWithChildren } from "react";

export function VehicleProvider({ children }: PropsWithChildren) {
  const [make, setMake] = useState<string | null>(null);
  const [model, setModel] = useState<string | null>(null);
  const [badge, setBadge] = useState<string | null>(null);

  const handleMakeChange = (value: string | null) => {
    setModel(null);
    setBadge(null);
    setMake(value);
  };

  const handleModelChange = (value: string | null) => {
    setBadge(null);
    setModel(value);
  };

  const handleBadgeChange = (value: string | null) => {
    setBadge(value);
  };

  const handleSet = (
    make: string | null,
    model: string | null,
    badge: string | null,
  ) => {
    setMake(make);
    setModel(model);
    setBadge(badge);
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
        handleSet,
      }}
    >
      {children}
    </FacetContext.Provider>
  );
}
