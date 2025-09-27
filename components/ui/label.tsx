import React from "react";
export function Label({ className = "", ...props }: any) {
  return <label className={["block text-sm text-zinc-600", className].join(" ")} {...props} />;
}