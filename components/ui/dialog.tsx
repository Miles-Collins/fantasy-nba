"use client";
import React from "react";
export function Dialog({ open, onOpenChange, children }: any) { if (!open) return null; return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => onOpenChange?.(false)}>{children}</div>; }
export function DialogContent({ className = "", children }: any) { return <div onClick={(e) => e.stopPropagation()} className={["w-full max-w-2xl rounded-2xl bg-white p-4", className].join(" ")}>{children}</div>; }
export function DialogHeader({ children }: any) { return <div className="mb-2">{children}</div>; }
export function DialogTitle({ className = "", children }: any) { return <div className={["text-lg font-semibold", className].join(" ")}>{children}</div>; }