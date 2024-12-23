import React from 'react';

const CopyrightComponent = () => {
	const style = {
		backgroundColor: 'black',
		color: 'white',
		textAlign: 'center',
		padding: '10px',
		bottom: '0',
		width: '100%',
		fontSize: '12px',
	};

	return (
		<div style={style}>
			© Copyright 2024. Made by WinLinAung
		</div>
	);
};

export default CopyrightComponent;