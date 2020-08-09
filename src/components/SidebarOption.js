import React from "react";
import "../css/SidebarOption.css";

function SidebarOption({ name, Icon, active }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"} `}>
      <Icon />
      <h2>{name}</h2>
    </div>
  );
}

export default SidebarOption;
