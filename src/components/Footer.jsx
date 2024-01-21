import React from 'react'
import { Link } from "react-router-dom";
import "./footer.css"

function Footer() {
  return (
    <footer>
      <ul className="footer__categories">
        <li><Link to="/posts/categories/python">Python</Link></li>
        <li><Link to="/posts/categories/java">Java</Link></li>
        <li><Link to="/posts/categories/javascript">Javascript</Link></li>
        <li><Link to="/posts/categories/Nodejs">Nodejs</Link></li>
      </ul>
      <div className="footer__copyright">
        <small>All Right Reserved &copy; copyright </small>
      </div>
    </footer>
  )
}

export default Footer