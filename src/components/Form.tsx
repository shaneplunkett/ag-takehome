import { useState } from "react";

export default function Form() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [badge, setBadge] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {}

  const handleMakeChange = (e) => {
    setMake(e.target.value);
  };

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  const handleBadgeChange = (e) => {
    setBadge(e.target.value);
  };

  const MODELS = {
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
      <form onSubmit={handleSubmit}>
        <select name="Make" value={make} onChange={handleMakeChange}>
          {makeItems}
        </select>
        <select
          name="Model"
          value={model}
          onChange={handleModelChange}
        ></select>
        <select
          name="Badge"
          value={badge}
          onChange={handleBadgeChange}
        ></select>
        <button type="reset">Reset Form</button>
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}
