import React from "react";
export function Select({ value, onValueChange, children }: any) {
  return <div>{React.Children.map(children, (c: any) => React.cloneElement(c, { value, onValueChange }))}</div>;
}
export function SelectTrigger({ className = "", children }: any) { return <div className={["rounded-xl border px-3 py-2", className].join(" ")}>{children}</div>; }
export function SelectContent({ children }: any) { return <div className="mt-2 space-y-1">{children}</div>; }
export function SelectItem({ value, onValueChange, children }: any) {
  return (
    <button onClick={() => onValueChange?.(children)} className="block w-full rounded-lg px-3 py-1 text-left hover:bg-zinc-100">
      {children}
    </button>
  );
}
export function SelectValue() { return null; }