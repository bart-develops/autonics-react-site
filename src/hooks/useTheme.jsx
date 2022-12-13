import { useState, useEffect } from 'react';

export const useTheme = () => {
	const themes = ['dark', 'light', 'painful'];
	const [currentTheme, setCurrentTheme] = useState(themes[0]);

	useEffect(() => {
		document.body.className = currentTheme;
	}, [currentTheme]);

	return {
		currentTheme,
		themes,
		setCurrentTheme,
	};
};
