import React from 'react';

const CopyrightComponent = () => {
	const style = {
		backgroundColor: 'black',
		color: 'white',
		textAlign: 'center',
		bottom: '0',
		width: '100%',
		fontSize: '12px',
		padding: '10px 0px'
	};

	return (
		<div style={style}>
			© Copyright 2024. Made by WinLinAung
		</div>
	);
};

export default CopyrightComponent;