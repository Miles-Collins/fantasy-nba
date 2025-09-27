import React from "react";
export function TooltipProvider({ children }: any) { return children; }
export function Tooltip({ children }: any) { return children; }
export function TooltipTrigger({ children }: any) { return children; }
export function TooltipContent({ children }: any) { return <span className="ml-2 text-xs text-zinc-500">{children}</span>; }