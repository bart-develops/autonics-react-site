// import React, { useState } from 'react';
import '../styles/ThemeSwitch.scss';
import { useTheme } from '../hooks/useTheme';

function ThemeSwitch() {
	const { currentTheme, setCurrentTheme, themes } = useTheme();

	const handleTheme = () => {
		currentTheme === 'dark'
			? setCurrentTheme(themes[1])
			: setCurrentTheme(themes[0]);
	};

	return (
		<>
			{/* <div
				className="theme-cont"
				title="Switch theme"
				onClick={() => handleTheme()}
			></div> */}
		</>
	);
}

export default ThemeSwitch;
