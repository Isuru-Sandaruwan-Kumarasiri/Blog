import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [useData, setUseData] = useState({
   
    email: "",
    password: "",
    
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
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form action="" className="form login__form">
          <p className="form__error-message">This is an error message</p>
          
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
          
          <button type="submit" className="btn primary">Login</button>
        </form>
        <small>Don't have an account? <Link to="/register">sign Up</Link></small>
      </div>
    </section>
  );
}

export default Login;
