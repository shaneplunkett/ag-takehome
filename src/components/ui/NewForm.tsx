import { useVehicleContext } from "@/lib/useVehicle";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

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
  const makeItems = Object.keys(MODELS).map((item) => (
    <SelectItem key={item} value={item}>
      {item}
    </SelectItem>
  ));
  return (
    <>
      <h2>Vehicle Selection Form</h2>
      <p>Please select your vehicle from the below dropdowns</p>
      <form>
        <Label>Select a Make</Label>
        <Select value={make} onValueChange={(e) => handleMakeChange(e ?? "")}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=""></SelectItem>
            {makeItems}
          </SelectContent>
        </Select>
        <Label>Select a Model</Label>
        <Select value={model} onValueChange={(e) => handleModelChange(e ?? "")}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=""></SelectItem>
            {make === "" ? (
              <SelectItem value=""></SelectItem>
            ) : (
              Object.keys(MODELS[make]).map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
        <Label>Select a Badge</Label>
        <Select value={badge} onValueChange={(e) => handleBadgeChange(e ?? "")}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=""></SelectItem>
            {make === "" || model === "" ? (
              <SelectItem value=""></SelectItem>
            ) : (
              MODELS[make][model].map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
      </form>
    </>
  );
}
