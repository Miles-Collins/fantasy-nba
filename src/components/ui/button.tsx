import React from "react";
export function Button({ className = "", variant, size, ...props }: any) {
  const base = "inline-flex items-center justify-center rounded-2xl px-3 py-2 text-sm shadow-sm transition-colors";
  const style = variant === "ghost" 
    ? "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300" 
    : "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200";
  const sz = size === "icon" ? "h-9 w-9 p-0" : "";
  return <button className={[base, style, sz, className].join(" ")} {...props} />;
}