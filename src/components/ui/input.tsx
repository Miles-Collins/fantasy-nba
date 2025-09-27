import React from "react";
export function Input({ className = "", ...props }: any) {
  return <input className={["w-full rounded-xl border bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 px-3 py-2 outline-none focus:ring focus:ring-blue-500/20 dark:focus:ring-blue-400/20", className].join(" ")} {...props} />;
}