import React from 'react'
import {Link} from "react-router-dom"
import PostAuthor from './PostAuthor'

function PostItem({postID,title,description,authorID,thumbnail,category}) {
    const showDescription =description.length >145?description.substr(0,145)+"...":description;
    const showtitle =title.length >145?title.substr(0,145)+"...":title;
  return (
    <article className='post'>
        <div className="post__thumbnail">
            <img src={thumbnail} alt={title} />
        </div>
        <div className="post__content">
            <Link to={"/post/${postID}"}>
                <h3>{showtitle}</h3>
            </Link>
            <p>{showDescription}</p>
            <div className="post__footer">
                <PostAuthor/>
                <Link to={'/posts/categories/${category}'} className='btn category'>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem