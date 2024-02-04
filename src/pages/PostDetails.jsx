import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import img from "../assets/image1.jpg";

function PostDetails() {
  return (
    <section className="post-details">
      <div className="container post-details__container">
        <div className="post-details__header">
          <PostAuthor />
          <div className="post-details__buttons">
            <Link to={"/post/erer/edit"} className="btn sm primary">
              Edit
            </Link>
            <Link to={"/post/erer/Delete"} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>

        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={img} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          voluptatem vitae odio iusto ullam eos incidunt unde mollitia, sunt
          pariatur voluptates atque voluptatum quas! Esse aliquid dolorum quia
          ad reiciendis, aliquam recusandae vero error architecto, distinctio
          voluptatum magni animi? Illo quod nostrum, commodi neque nisi nesciunt
          eveniet eligendi eaque ea ducimus soluta placeat vero ipsum officia
          veniam dolore, iusto ratione delectus. Porro ducimus dignissimos
          repellat natus reiciendis ipsam rerum corporis eum aspernatur aliquid
          accusantium impedit, beatae sapiente nostrum iste obcaecati.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic magnam
          voluptates natus laboriosam totam aperiam voluptate deleniti
          praesentium optio voluptatem debitis culpa ut non ratione adipisci,
          quidem reiciendis, amet fugiat soluta eum corrupti, quia id qui. Hic
          iste reprehenderit, voluptates ratione quam provident iusto recusandae
          ut labore aliquid eaque eos.
        </p>
      </div>
    </section>
  );
}

export default PostDetails;
