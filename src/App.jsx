import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

import Navbar from "./Components/Navbar";
import Home from "./Home/Home";
import Example from "./Components/Example";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Create from "./Components/Create";
import { useState } from "react";
import Blog from "./Components/Blog";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    setBlogs([blog, ...blogs]);
  };
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Example />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      <Route path="/create" element={<Create addBlog={addBlog} blogs={blogs} />}/>
      <Route path="/blog" element={<Blog/>}/>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
