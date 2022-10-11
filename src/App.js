//importing components
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Project />
      <Contact />
      <Footer />
    </>
    //need to return what is being displayed on the page
    //navbar - link to resume
    //about me - link to resume
    //projects
    //contact
    //footer
  );
}

export default App;
