import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main body">
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route exact path= "/recipes" element={<Recipes />} />
          <Route exact path= "/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
