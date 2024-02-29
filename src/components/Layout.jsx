import React from "react";
import { Nav } from "./Nav";
import { Header } from "./Header";
export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Nav />
    </div>
  );
};
