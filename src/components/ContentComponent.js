import PropTypes from 'prop-types';
import React, { useState, useEffect, use } from 'react';
import Card from './Card';
import '../css/Content.css';
import SmartContractImg from "../images/smartcontract.jpeg";

const ContentComponent = ({ title }) => {
const width = window.innerWidth;
const height = window.innerHeight;
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { title: 'Metaverse ဒေသနာတော်များ အပိုင်း ( ၁ )', content: 'Web3', img: '', link: "../content/lesson_four.html" },
    { title: 'Blockchain အကြောင်းသောင်းပြောင်းထွေလာအပိုင်း( ၁ )', content: 'Blockchain', img: '',link: "../content/lesson_one.html" },
    { title: 'Blockchain အကြောင်းသောင်းပြောင်းထွေလာအပိုင်း( ၂ )', content: 'Content 3', img: '',link: "../content/lesson_two.html" },
    { title: 'Web 1.0, Web 2.0 and Web 3.0', content: 'Web3', img: '' },
    { title: 'Difference between ERC 20 and ERC 721 ( part 1 )', content: 'Smart Contract', img: '',link: "../content/lesson_three.html" },
    { title: 'What is the Adapter Design Pattern?', content: 'Design Pattern', img: '',link: "../content/lesson_five.html" },
    { title: 'What is the observer design pattern ?', content: 'Design Pattern', img: '',link: "../content/lesson_six.html" },
	{ title: 'What is the factory design pattern ?', content: 'Design Pattern', img: '',link: "../content/lesson_eight.html" },
	{ title: 'What is the bridge design pattern ?', content: 'Design Pattern', img: '',link: "../content/lesson_nine.html" },
	{ title: 'What is the singleton design pattern ?', content: 'Design Pattern', img: '',link: "../content/lesson_ten.html" },
  ];

  const cardWidth =width <= 768 ? 150:  250; // adjust card width based on screen size 

  useEffect(() => {
    const updateCurrentIndex = () => {
      const scrollPosition = document.querySelector('.card-list').scrollLeft;
      const index = Math.floor((scrollPosition / cardWidth));
      setCurrentIndex(index);
    };
    const cardList = document.querySelector('.card-list');
    cardList.addEventListener('scroll', updateCurrentIndex);
    return () => {
      cardList.removeEventListener('scroll', updateCurrentIndex);
    };
  }, [cardWidth]);

  return (
    <div className="content-component" id="content-section">
      <h1>{title}</h1>
      <div className="card-list">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={SmartContractImg}
            title={card.title}
            description={card.content}
            isActive={currentIndex === index}  
			link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

ContentComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContentComponent;
