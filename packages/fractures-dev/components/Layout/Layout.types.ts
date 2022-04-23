import React from "react";

export interface MetaType {
  description: string;
  title: string;
  url: string;
}

export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}
