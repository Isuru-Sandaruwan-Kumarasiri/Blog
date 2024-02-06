import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function EditPost() {
  const [title, setTitle] = useState("");
  const [Category, setCategory] = useState("Uncategory");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2,3,4,5,6,7, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["linke", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "indent",
    "image",
    "link",
  ];
  const Post_Categories = [
    "Agriculture",
    "Business",
    "Education",
    "Enteraitment",
    "Art",
    "Weather",
  ];
  return (
    <section className="create-post">
      <div className="container">
        <h2>Edit Post</h2>
        <p className="form__error-message">This is an error message</p>
        <form action="" className="create-post__form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            name="category"
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Post_Categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <ReactQuill modules={modules} formats={formats} value={description}  onChange={setDescription}/>
          <input
            type="file"
            onChange={(e) => setImg(e.target.files[0], console.log(e))}
            accept="pang ,jpg,jpng"
          />
          <button type="submit" className="btn primary">Update</button>
        </form>
      </div>
    </section>
  );
}

export default EditPost;
