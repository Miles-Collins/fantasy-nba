import React from "react";
export function Input({ className = "", ...props }: any) {
  return <input className={["w-full rounded-xl border px-3 py-2 outline-none focus:ring", className].join(" ")} {...props} />;
}