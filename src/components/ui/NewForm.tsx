import { useVehicleContext } from "@/lib/useVehicle";

type ModelData = Record<string, string[]>;

export default function NewForm() {
  const context = useVehicleContext();
  const MODELS: Record<string, ModelData> = {
    ford: {
      Ranger: ["Raptor", "Raptorx", "wildtrak"],
      Falcon: ["XR6", "XR6 Turbo", "XR8"],
      "Falcon Ute": ["XR6", "XR6 Turbo"],
    },
    bmw: {
      "130d": ["xDrive 26d", "xDrive 30d"],
      "240i": ["xDrive 30d", "xDrive 50d"],
      "320e": ["xDrive 75d", "xDrive 80d", "xDrive 85d"],
    },
    tesla: {
      "Model 3": ["Performance", "Long Range", "Dual Motor"],
    },
  };
  const makeItems = Object.keys(MODELS).map((item) => (
    <option key={item}>{item}</option>
  ));
  return (
    <>
      <label>
        Select a Make
        <select
          name="Make"
          value={make}
          onChange={(e) => handleMakeChange(e.target.value)}
        >
          <option value=""></option>
          {makeItems}
        </select>
      </label>
    </>
  );
}
