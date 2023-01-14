import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AdvantageCont from "./components/AdvantageCont";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  return (
    <Router>
      <Header />
      <AdvantageCont />
      <About />
      <Contact />
      <Footer />
      <ThemeSwitch />
    </Router>
  );
}

export default App;
