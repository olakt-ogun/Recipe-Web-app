import Navbar from "./components/Navbar"
import HeroScetion from "./components/HeroSection";
import ImproveSkills from "./components/ImproveSkills";
import QuoteSection from "./components/QuoteSection";
import ChefsSection from "./components/ChefsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <HeroScetion />
        <ImproveSkills />
        <QuoteSection />
        <ChefsSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
