import React, { FC } from 'react';
import '../css/Card.css';

interface CardProps {
  image: string;
  title: string;
  description: string;
  isActive?: boolean;
  link?: string;
}

const Card: FC<CardProps> = ({ image, title, description, isActive = false, link = '#' }) => (
  <a href={link} target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
    <div className={`card ${isActive ? 'active' : ''}`}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  </a>
);

export default Card;