import React from "react";
import "../css/SidebarOption.css";

function SidebarOption({ name, Icon }) {
  return (
    <div className="sidebarOption">
      <Icon />
      <h2>{name}</h2>
    </div>
  );
}

export default SidebarOption;
