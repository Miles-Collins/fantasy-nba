"use client";
import React from "react";
export function Tabs({ defaultValue, children }: any) { const [v, setV] = React.useState(defaultValue); return <div data-tab={v}>{React.Children.map(children, (c: any) => React.cloneElement(c, { value: v, setValue: setV }))}</div>; }
export function TabsList({ children, className = "" }: any) { return <div className={["rounded-xl bg-zinc-100 p-1", className].join(" ")}>{children}</div>; }
export function TabsTrigger({ value, setValue, children, className = "" }: any) { return <button onClick={() => setValue(children?.props?.value ?? children)} className={["mx-1 rounded-xl px-3 py-1 text-sm", className].join(" ")}>{children}</button>; }
export function TabsContent({ children, value, className = "" }: any) { return <div className={["", className].join(" ")}>{children}</div>; }