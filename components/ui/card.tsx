import React from "react";
export function Card({ className = "", ...props }: any) { return <div className={["rounded-2xl border bg-white", className].join(" ")} {...props} />; }
export function CardHeader({ className = "", ...props }: any) { return <div className={["p-4", className].join(" ")} {...props} />; }
export function CardContent({ className = "", ...props }: any) { return <div className={["p-4", className].join(" ")} {...props} />; }
export function CardTitle({ className = "", ...props }: any) { return <h3 className={["text-lg font-semibold", className].join(" ")} {...props} />; }