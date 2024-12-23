import React from 'react';
import '../css/Skill.css';
import AnimatedProgressBar from '../elements/AnimatedProgressBar';
import styled from 'styled-components';
const skills = [
	{title: "React", progress: 100, color: "#FFD966"},
	{title: "React Native", progress: 100, color: "orange"},
	{title: "Nextjs", progress: 85, color: "yellow"}, 
	{title: "Solidity", progress: 80, color: "lightGreen"}, 
	{title: "Blockchain", progress: 90, color: "white"}, 
	{title: "Web3", progress: 75, color: "lightBlue"}, 
	{title: "Javascript", progress: 100, color: " #40E0D0"}, 
	{title: "Typescript", progress: 70, color: "#FFC6A0"}, 
	{title: "Java", progress: 80, color: "#D0F0C0"}, 
	{title: "Flutter", progress: 90, color: "lightYellow"}, 
	{title: "Postgresql", progress: 80, color: "lightGreen"}, 
	{title: "MongoDB", progress: 80, color: "pink"}, 
	{title: "MariaDB", progress: 80, color: "#EAD0FF"}]
const SkillComponent = () => {
	return <div id="skill-section" className="skill-component">
		<Title>Skills</Title>
	<Row>{skills.map((skill, index) => (
		<div className="skill-container">
			<SkillTitle>{skill.title}</SkillTitle>
			<div className="progress-bar">
				<AnimatedProgressBar progress={skill.progress} color={skill.color}/>
			</div>
		</div>))
		}
		</Row>
		</div>
	
};
const Row = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	gap: 10px;
	 flex-wrap: wrap;
	  `
const Title = styled.h1`
text-align: start;
  font-size: 1.2em;
  color:rgb(87, 131, 87);
  font-weight: bold;
`;
const SkillTitle = styled.h1`
text-align: start;
  font-size: 0.8em;
  font-weight: bold;
`;

export default SkillComponent;