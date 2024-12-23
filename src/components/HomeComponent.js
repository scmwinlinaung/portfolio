import React from 'react';
import styled from 'styled-components';
import DiscordImg from "../images/discord.png";
import LinkedInImg from "../images/linkedin.png";
import GithubImg from "../images/github.png";
import TelegramImg from "../images/telegram.png";
const socialLinks = [
	{
		img: DiscordImg,
		link: "https://discordapp.com/users/Win#1737"
	},{
		img: LinkedInImg,
		link: "https://www.linkedin.com/in/win-linaung-36024a168"
	},
	{
		img: GithubImg,
		link: "https://github.com/scmwinlinaung"
	}, 
	{
		img: TelegramImg,
		link: "https://t.me/WinLinAung"
	}
	
]
const HomeComponent = () => {
	return (
		<div id="home-section" style={{padding: "0.6rem"}}>
			<Title>HI, I'm Win Lin Aung</Title>
			<SubTitle>A Result-Oriented Blockchain Developer building and managing Decentralized Websites and Web Applications that leads to the success of the overall product</SubTitle>
			<Row>
				{socialLinks.map((social, index) => (
					<Avatar key={index} href={social.link} target="_blank">
					<img 
						src={social.img}
						alt="social link"
						style={{width: "100%", height: "100%", objectFit: "contain"}}
					/>
					</Avatar>
				))}
			</Row>
		</div>
	);
};
const Title = styled.h1`
  font-size: 2em;
  color:rgb(87, 131, 87);
  font-weight: bold;
`;
const SubTitle = styled.h1`
	align-self: center;
  	font-size: 1em;
  	color:rgb(0, 0, 0);
`;
const Row = styled.div`
	margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  overflow: hidden
`;
const Avatar = styled.a `	
  display: inline-block;
  width: 25px;
  height: 25px;
	border-radius: 50%; 
	overflow: hidden;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1); 
	border: 5px solid rgb(87, 131, 87, 0.6); 
	cursor: pointer;
`;
export default HomeComponent;