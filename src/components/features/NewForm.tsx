import { MODELS } from "@/lib/useVehicle";
import { useVehicleContext } from "@/lib/useVehicle";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
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
    <div className="flex items-center justify-center h-screen">
      <Card className="wfull max-w-sm">
        <CardHeader>
          <CardTitle>Vehicle Selection</CardTitle>
          <CardDescription>Select Your Vehicle Below</CardDescription>
          <CardAction>
            <Button
              size="sm"
              variant="link"
              onClick={() => handleSet("", "", "")}
            >
              Reset
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Label className="p-1">Select a Make</Label>
          <Select value={make} onValueChange={(e) => handleMakeChange(e ?? "")}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=""></SelectItem>
              {makeItems}
            </SelectContent>
          </Select>
          <Label className="p-1 mt-2">Select a Model</Label>
          <Select
            value={model}
            onValueChange={(e) => handleModelChange(e ?? "")}
          >
            <SelectTrigger className="w-full">
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
          <Label className="p-1 mt-2">Select a Badge</Label>
          <Select
            value={badge}
            onValueChange={(e) => handleBadgeChange(e ?? "")}
          >
            <SelectTrigger className="w-full">
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
        </CardContent>
        <CardFooter>
          <Button
            size="xs"
            variant="outline"
            onClick={() => handleSet("Ford", "Falcon", "XR6 Turbo")}
          >
            Ford Falcon XR6 Turbo
          </Button>
          <Button
            size="xs"
            variant="outline"
            onClick={() => handleSet("Tesla", "Model 3", "Performance")}
          >
            Tesla Model 3
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
