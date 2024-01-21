import React from 'react'
import { Link } from 'react-router-dom'
import author from "../assets/author1.jpg"

function PostAuthor() {
  return (
    <Link to="/posts/users/name" className='post__author'>
      <div className="post__author-avatar">
        <img src={author} alt="" />
      </div>
      <div className="post__author-details">
        <h5>By:Isuru Sandaruwan</h5>
        <small>Just Now</small>
      </div>
    </Link>
  )
}

export default PostAuthor