import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li className="post">
          <Link to={"/post"}>Post</Link>
        </li>
        <li>
          <Link to={"/about"}>About Me</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact us</Link>
        </li>
      </nav>
      <Link to={"/create"}>
      <button className="b">Create A Blog</button></Link>
      
    </div>
  );
};

export default Navbar;
