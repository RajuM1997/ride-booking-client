import { Slider } from "@/components/ui/slider";

export default function RangeInput({ ...field }) {
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm pt-1">
        <span>Min: {field.value[0]}</span>
        <span>Max: {field.value[1]}</span>
      </div>

      <Slider
        min={1}
        max={1000}
        step={1}
        value={field.value}
        onValueChange={field.onChange}
      />
    </div>
  );
}
