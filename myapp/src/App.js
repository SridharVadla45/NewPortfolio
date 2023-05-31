import Navbar from "./components/Navbar";
import Home from './components/Home'
import About from "./components/About";
import PortfolioSection from "./components/PortfolioSection";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <PortfolioSection/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
