import React, { useState } from "react";
import {Link} from "react-router-dom"

import person1 from "../assets/person.jpg";


const authorsData = [
  { id: 1, avatar: person1, name: "Thilini Athukorala", post: 3 },
  { id: 2, avatar: person1, name: "Nimna Anjana", post: 5 },
  { id: 3, avatar: person1, name: "Diluka Dilrukshi", post: 0 },
  { id: 4, avatar: person1, name: "Prasann Madushanka", post: 2 },
  { id: 5, avatar: person1, name: "Chathura Lakshan", post: 1 },
];
function Author() {
  const [authors, setAuthors] = useState(authorsData);
  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors__container">
          {authors.map(({ id, avatar, posts, name }) => { 
            return <Link key={id} to={"/posts/users/${id}"}className="author">
              <div className="author__avatar">
                <img src={avatar} alt={"Image of ${name}"} />
              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })}
        </div>
      ) : (
        <h2>No user/authors found</h2>
      )}
    </section>
  );
}

export default Author;
