import React, { useState } from "react";
import { Link } from "react-router-dom";
import person from "../assets/person.jpg";
import { MdEditLocationAlt } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

function UserProfile() {
  const [avatar, setAvatar] = useState(person);
  const [name,setName]=useState('');
  const [email,setemail]=useState('');
  const [curreentPassword,setCurreentPassword]=useState('');
  const [newPassword,setNewPassword]=useState('');
  const [confirmPassword,setconfirmPasswordd]=useState('');


  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={"/mypost/sdfs"} className="btn">
          My Post
        </Link>

        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar} alt="" />
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

          <form action="" className="form profile__form">
            <p className="form__error-message">This is an error message</p>
            <input type="text" placeholder="full name" value={name} onChange={e=>setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={e=>setemail(e.target.value)} />
            <input type="password" placeholder="current password" value={curreentPassword} onChange={e=>setCurreentPasspassword(e.target.value)} />
            <input type="password" placeholder="New Password" value={newPassword} onChange={e=>setNewPassword(e.target.value)} />
            <input type="password" placeholder="confirm new password" value={name} onChange={e=>setconfirmPasswordd(e.target.value)} />

          </form>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
