import React, { useState } from "react";
import { Link } from "react-router-dom";
import person from "../assets/person.jpg";
import { MdEditLocationAlt } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

function UserProfile() {
  const [avatar, setAvatar] = useState("");
  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={"/mypost/sdfs"} className="btn">
          My Post
        </Link>

        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={person} alt="" />
            </div>

            <form action="" className="avatar__form">
              <input
                type="file"
                name="avatar"
                id="avatar"
                accept="png,jpg,jpng"
                onChange={(e) => setAvatar(e.target.files[0])}
              />
              <label htmlFor="avatar">
                <MdEditLocationAlt />
              </label>
            </form>
            <button className="profile__avatar-btn">
              <FaCheck />
            </button>
          </div>


          <h1>Isuru Sandaruwan</h1>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
