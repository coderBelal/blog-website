import { useState } from "react";

import "./Create.css"
const Create = ({addBlog,blogs}) => {
    const [title, setTitle] =  useState('');
    const [content, setContent] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addBlog({ title, content });
      setTitle('');
      setContent('');
    };
  return (
    <div className="article">
        
        <form onSubmit={handleSubmit} className="blog-form">
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Blog</button>
    </form>
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <div key={index} className="blog-post">
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Create
