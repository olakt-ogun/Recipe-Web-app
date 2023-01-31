import Navbar from "./components/Navbar"
import HeroScetion from "./components/HeroSection";
import ImproveSkills from "./components/ImproveSkills";
import QuoteSection from "./components/QuoteSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <HeroScetion />
        <ImproveSkills />
        <QuoteSection />

      </div>
    </div>
  );
}

export default App;
