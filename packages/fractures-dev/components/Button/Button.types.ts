import React from "react";

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type: "primary" | "secondary";
}
