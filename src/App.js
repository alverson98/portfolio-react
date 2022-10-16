import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//importing components
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="w-100" id="main">
          <Header />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>{" "}
    </>
  );
}

export default App;
