import React from "react";
import { Button } from "@material-ui/core";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import SidebarOption from "./SidebarOption";
import "../css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
      <TwitterIcon className="sidebar__twitterIcon" />

      {/* Sidebar option */}
      <SidebarOption active name={"Home"} Icon={HomeIcon} />
      <SidebarOption name={"Explore"} Icon={SearchIcon} />
      <SidebarOption name={"Notifications"} Icon={NotificationsNoneIcon} />
      <SidebarOption name={"Messages"} Icon={MailOutlineIcon} />
      <SidebarOption name={"Bookmarks"} Icon={BookmarkBorderIcon} />
      <SidebarOption name={"Lists"} Icon={ListAltIcon} />
      <SidebarOption name={"Profile"} Icon={PermIdentityIcon} />
      <SidebarOption name={"More"} Icon={MoreHorizIcon} />

      <Button variant="outlined" fullWidth className="sidebar--tweet">
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
