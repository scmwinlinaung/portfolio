import React, { useState } from "react";
import "../css/Navbar.css";
import ProfileImg from "../images/profile.jpg";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar_brand">
	  <div className="avatar">
		<img 
			src={ProfileImg}
			alt="User Avatar" 
			className="avatar_image" 
		/>
		</div>
		<p style={{fontSize: "1rem", fontWeight: "bold"}}>WIN LIN AUNG</p>
        </div>
		<button className="navbar_toggle" onClick={toggleMobileMenu}>
          <span className="navbar_toggle-bar"></span>
          <span className="navbar_toggle-bar"></span>
          <span className="navbar_toggle-bar"></span>
        </button>
      
      <nav className={`navbar_menu ${isMobileMenuOpen ? "navbar_menu--open" : ""}`}>
        <a href="#home" className="navbar_link" onClick={() => handleClick("home")}>Home</a>
        <a href="#content" className="navbar_link" onClick={() => handleClick("content")}>Content</a>
        <a href="#skill" className="navbar_link" onClick={() => handleClick("skill")}>Skill</a>
        <a href="#education" className="navbar_link" onClick={() => handleClick("education")}>Education</a>
		<a href="#experience" className="navbar_link" onClick={() => handleClick("experience")}>Experience</a>
		<a href="#projects" className="navbar_link" onClick={() => handleClick("projects")}>Projects</a>
      </nav>
    </header>
  );
};

export default Navbar;
