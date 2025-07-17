import { cn } from "@/lib/utils";
import React from "react";

interface IElpliceProp {
  className?: string;
}
export const Elispce: React.FC<IElpliceProp> = ({ className }) => (
  <div className={cn("rounded-full", className)} />
);
