import React from "react";
export function Card({ className = "", ...props }: any) { return <div className={["rounded-2xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700", className].join(" ")} {...props} />; }
export function CardHeader({ className = "", ...props }: any) { return <div className={["p-4", className].join(" ")} {...props} />; }
export function CardContent({ className = "", ...props }: any) { return <div className={["p-4", className].join(" ")} {...props} />; }
export function CardTitle({ className = "", ...props }: any) { return <h3 className={["text-lg font-semibold text-gray-900 dark:text-gray-100", className].join(" ")} {...props} />; }