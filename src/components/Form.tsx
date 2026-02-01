import { useState } from "react";
import type { ChangeEvent } from "react";

type ModelData = Record<string, string[]>;

export default function Form() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [badge, setBadge] = useState("");
  const [error, setError] = useState(null);
  const [logbook, setLogbook] = useState<File | null>(null);

  async function handleSubmit() {}

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

  function handleMakeChange(e: ChangeEvent<HTMLSelectElement>) {
    setModel("");
    setBadge("");
    setMake(e.target.value);
  }

  function handleModelChange(e: ChangeEvent<HTMLSelectElement>) {
    setBadge("");
    setModel(e.target.value);
  }

  function handleReset() {
    setModel("");
    setBadge("");
    setMake("");
    setLogbook(null);
  }

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    setLogbook(e.target.files?.[0] || null);
  }

  function handleFord() {
    setMake("ford");
    setModel("Falcon");
    setBadge("XR6 Turbo");
  }

  function handleTesla() {
    setMake("tesla");
    setModel("Model 3");
    setBadge("Performance");
  }

  const makeItems = Object.keys(MODELS).map((item) => (
    <option key={item}>{item}</option>
  ));

  return (
    <>
      <h2>Vehicle Selection Form</h2>
      <p>Please select your vehicle from the below dropdowns</p>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <label>
          Select a Make
          <select
            name="Make"
            value={make}
            onChange={(e) => handleMakeChange(e)}
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
            onChange={(e) => handleModelChange(e)}
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
            onChange={(e) => setBadge(e.target.value)}
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
        <label>
          Upload your Logbook:
          <input
            name="logbook"
            type="file"
            accept=".txt"
            onChange={(e) => handleFile(e)}
            disabled={badge === "" ? true : false}
          />
        </label>
        <h3>Vehicle Quick Select</h3>
        <button type="button" onClick={handleFord}>
          Ford Falcon XR6 Turbo
        </button>
        <button type="button" onClick={handleTesla}>
          Tesla Model 3
        </button>
        <h3>Submit or Start Again</h3>
        <button type="submit" onClick={handleSubmit}>
          Submit Form
        </button>
        <button type="reset" onClick={handleReset}>
          Reset Form
        </button>
      </form>
    </>
  );
}
