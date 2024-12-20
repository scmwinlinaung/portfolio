import React, { useState } from "react";
import "../css/Navbar.css";
import ProfileImg from "../images/profile.jpg";
const navbarLinks = [
	"home",
	"content",
	"skill",
	"education",
	"experience",
	"projects"]
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [activeLink, setActiveLink] = useState("home");
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleClick = (anchor) =>{
	setActiveLink(anchor)
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
		{
			navbarLinks.map((link, index) => (
				<a
				href={`#${link}`} className="navbar_link" style={{color: activeLink === link ? "#88e788": "black"}} key={index} onClick={() => handleClick(link)}>{link[0].toUpperCase() + link.slice(1)}</a>
			))
		}
      </nav>
    </header>
  );
};

export default Navbar;
