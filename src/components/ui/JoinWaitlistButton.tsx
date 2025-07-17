import React from "react";
import { cn } from "@/lib/utils";

export const JoinWaitlistButton: React.FC<{
  className?: string;
  handleButtonClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}> = ({ className, handleButtonClick, type, disabled }) => (
  <button
    className={cn(`btn-primary font-accent ${disabled ? "" : ""}`, className)}
    onClick={handleButtonClick}
    type={type}
    disabled={disabled}
  >
    Join Waitlist
  </button>
);
