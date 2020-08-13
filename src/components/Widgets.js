import React from "react";
import "../css/Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed></TwitterTweetEmbed>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="vijay_vaddem"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
