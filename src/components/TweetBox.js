import React, { useState } from "react";
import "../css/Tweetbox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "../config/firebase";

export default function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Vijay Kumar",
      verified: true,
      username: "vijayk",
      text: tweetMessage,
    });

    setTweetMessage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <Button type="submit" onClick={sendTweet} className="tweetbox_button">
          Tweet
        </Button>
      </form>
    </div>
  );
}
