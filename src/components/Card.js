import React from 'react';
import PropTypes from 'prop-types';
import '../css/Card.css';  // Ensure you have Card.css for styles

const Card = ({ image, title, description, isActive,link }) => (
<a href={link} target="_blank" style={{textDecoration: "none", color: "inherit"}} >
  <div className={`card ${isActive ? 'active' : ''}`}>
    <img src={image} alt={title} className="card-image" />
    <div className="card-content">
      <p>{title}</p>
      <p>{description}</p>
    </div>
  </div>
	  </a>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  link: PropTypes.string,
};

export default Card;
