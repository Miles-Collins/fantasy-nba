import React from "react";
export function Button({ className = "", variant, size, ...props }: any) {
  const base = "inline-flex items-center justify-center rounded-2xl px-3 py-2 text-sm shadow-sm";
  const style = variant === "ghost" ? "bg-transparent hover:bg-zinc-100" : "bg-zinc-900 text-white hover:bg-zinc-800";
  const sz = size === "icon" ? "h-9 w-9 p-0" : "";
  return <button className={[base, style, sz, className].join(" ")} {...props} />;
}