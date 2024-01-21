import React, { useState } from "react";
import PostItem from "./PostItem";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";



import "./post.css"

const DUMMY_POST = [
  {
    id: "1",
    thumbnail: img6,
    category: "education",
    title: "This is the title of the very first post on this blog",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: img2,
    category: "education",
    title: "This is the title of the very first post on this blog",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    authorID: 3,
  },
  {
    id: "3",
    thumbnail: img3,
    category: "education",
    title: "This is the title of the very first post on this blog",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    authorID: 13,
  },
  {
    id: "4",
    thumbnail: img4,
    category: "education",
    title: "This is the title of the very first post on this blog",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    authorID: 8,
  },
  {
    id: "5",
    thumbnail: img5,
    category: "education",
    title: "This is the title of the very first post on this blog",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    authorID: 9,
  },
];

function Post() {
  const [posts, setPosts] = useState(DUMMY_POST);
  return (
    <div className="section">
      <div className="container posts__container">
        {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
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
