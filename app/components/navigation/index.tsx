"use client";

import React from "react";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
    </div>
  );
}
