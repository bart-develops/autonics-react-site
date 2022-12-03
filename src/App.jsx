import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AdvantageCont from './components/AdvantageCont';
import { useTheme } from './hooks/useTheme';

function App() {
	const { currentTheme, setCurrentTheme, themes } = useTheme();
	return (
		<Router>
			<Header />
			<AdvantageCont />
		</Router>
	);
}

export default App;
