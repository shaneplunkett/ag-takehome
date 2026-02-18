import { useVehicleContext } from "@/lib/useVehicle";

type ModelData = Record<string, string[]>;

export default function NewForm() {
  const {
    make,
    model,
    badge,
    handleMakeChange,
    handleModelChange,
    handleBadgeChange,
  } = useVehicleContext();
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
      <h2>Vehicle Selection Form</h2>
      <p>Please select your vehicle from the below dropdowns</p>
      <form>
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
        <label>
          Select a Model
          <select
            name="Model"
            value={model}
            onChange={(e) => handleModelChange(e.target.value)}
          >
            <option value=""></option>
            {make === "" ? (
              <option value=""></option>
            ) : (
              Object.keys(MODELS[make]).map((item) => (
                <option key={item}>{item}</option>
              ))
            )}
          </select>
        </label>
        <label>
          Select Badge
          <select
            name="Badge"
            value={badge}
            onChange={(e) => handleBadgeChange(e.target.value)}
          >
            <option value=""></option>
            {make === "" || model === "" ? (
              <option value=""></option>
            ) : (
              MODELS[make][model].map((item) => (
                <option key={item}>{item}</option>
              ))
            )}
          </select>
        </label>
      </form>
    </>
  );
}
