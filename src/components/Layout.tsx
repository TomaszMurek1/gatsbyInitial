import React, { ReactNode } from "react";
import "../styles/global.css";
import NavBar from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <NavBar></NavBar>
      <div className="content">{children}</div>
    </div>
  );
}
