import React, { useState, useEffect } from "react";
import "../css/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../config/firebase";

function Feed() {
  //add state for posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //console.log("In useEffect", db.collection("posts"));
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  console.log("Posts", posts);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      {/* Post({ displayName, username, 
        verified, text, image, avatar })  */}
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
