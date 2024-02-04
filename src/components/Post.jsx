import React, { useState } from "react";
import PostItem from "./PostItem";


import "./post.css"
import { DUMMY_POST } from "../data";

function Post() {
  const [posts, setPosts] = useState(DUMMY_POST);
  return (
    <div className="section">
      <div className="container posts__container">
        {
        posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
          <PostItem
            key={id}
            thumbnail={thumbnail}
            category={category}
            title={title}
            description={desc}
            authorID={authorID}
          />
        ))}
      </div>
    </div>
  );
}

export default Post;
