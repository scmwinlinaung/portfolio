import React from 'react';

interface EduCardProps {
	university: string;
	period: string;
	description: string;
}

const EduCard: React.FC<EduCardProps> = ({ university, period, description }) => {
	return (
		<div className="edu-card">
			<h3>{university}</h3>
			<p>{period}</p>
		</div>
	);
};

export default EduCard;