import React from "react";
import "../css/Tweetbox.css";
import { Button, Avatar } from "@material-ui/core";

export default function TweetBox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <Button className="tweetbox_button">Tweet</Button>
      </form>
    </div>
  );
}
