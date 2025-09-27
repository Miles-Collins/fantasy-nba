import React from "react";
export function Slider({ value, defaultValue, onValueChange, min = 0, max = 100, step = 1 }: any) {
  const [v, setV] = React.useState<number>(defaultValue?.[0] ?? value?.[0] ?? 0);
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={v}
      onChange={(e) => { const nv = Number(e.target.value); setV(nv); onValueChange?.([nv]); }}
      className="w-full"
    />
  );
}