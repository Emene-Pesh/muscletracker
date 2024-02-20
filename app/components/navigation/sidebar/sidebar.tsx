import React from "react";
import Logo from "../../logo/logo";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function Sidebar(props: SidebarProps) {
  return (
    <div>
      <button onClick={props.toggle}>
        <Logo />
      </button>
      {props.isOpen && <h1>SHOWN</h1>}
    </div>
  );
}
