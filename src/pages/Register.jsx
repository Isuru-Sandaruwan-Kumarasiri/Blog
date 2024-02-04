import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [useData, setUseData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const changeInputHandle = (e) => {
    console.log(e);
    setUseData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      
    })
       
    );
  };
  return (
    <section className="register">
      <div className="container">
        <h1>Sign Up</h1>
        <form action="" className="form register__form">
          <p className="form__error-message">This is an error message</p>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={useData.name}
            onChange={changeInputHandle}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={useData.email}
            onChange={changeInputHandle}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            value={useData.password}
            onChange={changeInputHandle}
          />
          <input
            type="text"
            placeholder="confirm password"
            name="password2"
            value={useData.password2}
            onChange={changeInputHandle}
          />
          <button type="submit" className="btn primary">Register</button>
        </form>
        <small>Already have an account <Link to="/login">sign in</Link></small>
      </div>
    </section>
  );
}

export default Register;
