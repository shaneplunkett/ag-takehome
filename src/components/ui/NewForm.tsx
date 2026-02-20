import { MODELS } from "@/lib/useVehicle";
import { useVehicleContext } from "@/lib/useVehicle";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function NewForm() {
  const {
    make,
    model,
    badge,
    handleMakeChange,
    handleModelChange,
    handleBadgeChange,
    handleSet,
  } = useVehicleContext();
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
        <h3>Vehicle Quick Select</h3>
        <Button
          size="sm"
          variant="outline"
          onClick={() => handleSet("Ford", "Falcon", "XR6 Turbo")}
        >
          Ford Falcon XR6 Turbo
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => handleSet("Tesla", "Model 3", "Performance")}
        >
          Tesla Model 3
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => handleSet("", "", "")}
        >
          Reset
        </Button>
      </form>
    </>
  );
}
