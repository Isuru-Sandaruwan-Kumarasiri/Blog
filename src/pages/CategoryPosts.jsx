import React, { useState } from 'react'

function CategoryPosts() {
  const[title,setTitle]=useState('');
  const[Category,setCategory]=useState("Uncategory");
  const[description,setDescription]=useState('');
  const[img,setImg]=useState('');

  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        <p className="form__error-message">
          This is an error message
        </p>
        <form action="" className="create-post__form">
          <input type="text" placeholder='Title' value={title} />
        </form>
      </div>
    </section>
  )
}

export default CategoryPosts