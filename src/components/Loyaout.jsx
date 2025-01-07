import React from "react";
import Navbar from "./Navbar/Navbar";


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">{children}</main>
      <Navbar />
    </div>
  );
};

export default Layout;