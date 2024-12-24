import React from 'react';
import '../css/Education.css';
import styled from 'styled-components';
import EduCard from '../elements/EduCard';
const education =[
	{
		university: 'Bachelor of Information Science from Yatanarpon Cyber City',
		period: '2012 - 2018',
		description: 'A Bachelor of Information Science is an undergraduate degree program that focuses on the study of information, information systems,computer science and the effective use of technology to manage and analyze information'
	},
	{
		university: 'Taxila Institute',
		period: '2018',
		description: 'Career Readiness And Professional Development Certificate'
	},
	
]
const certificates = [	{
	university: 'Edx',
	period: '2024 April',
	description: 'Microservices And Serverless'
},
{
	university: 'FreeCodeCamp',
	period: '2023 December',
	description: 'JavaScript Algorithms and Data Structures'
},
{
	university: 'Udemy',
	period: '2022 April',
	description: 'Metaverse Masterclass-Learn Everything about the metaverse'
},
{
	university: 'Udemy',
	period: '2021 September',
	description: 'Learn blockchain by building your own in javascript'
},
{
	university: 'Udemy',
	period: '2021 January',
	description: 'Basic swift programming and ios'
}]
const EducationComponent = () => {
  return (
    <div className="education-component" id="education-section">
      <Row>
        <Column>
          <Title>Education</Title>
          <ColumnWithLine>
            {education.map((edu, index) => (
              <div key={index} className="row-container">
                <div className="circle" />
                <div className="line" />
                <EduCard
                  university={edu.university}
                  period={edu.period}
                  description={edu.description}
                />
              </div>
            ))}
            <div className="vertical-line"></div>
          </ColumnWithLine>
        </Column>
        <Column>
          <Title>Certificates</Title>
          <ColumnWithLine>
            {certificates.map((edu, index) => (
              <div key={index} className="row-container">
                <div className="circle" />
                <div className="line" />
                <EduCard
                  university={edu.university}
                  period={edu.period}
                  description={edu.description}
                />
              </div>
            ))}
            <div className="vertical-line"></div>
          </ColumnWithLine>
        </Column>
      </Row>
    </div>
  );
};
const Title = styled.h1`
text-align: start;
  font-size: 1.2em;
  color:rgb(87, 131, 87);
  font-weight: bold;
  margin: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: start;
  flex-direction: row;
  gap: 1em;
`;
const Column = styled.div`
	  display: flex;	
	  flex-direction: column;	
	  `
const ColumnWithLine = styled.div`
  position: relative; /* Needed for placing the vertical line */
  display: flex;
  flex-direction: column; /* Stack rows vertically */
  align-items: flex-start;

  .row-container {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 2em; /* Adds space between rows */
  }

  .circle {
    width: 10px;
    height: 10px;
    background-color: cadetblue;
    border-radius: 50%;
    position: relative;
  }

  .vertical-line {
    position: absolute;
    top:0; /* Centered relative to the top of the row */
    left: 4px; /* Align with the circle's center */
    width: 2px; /* Line thickness */
    height: 100%;
    background-color: cadetblue;
    z-index: -1;
  }
`;
export default EducationComponent;