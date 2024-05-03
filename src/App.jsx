import "./App.css";
import Header from "./components/Layouts/Header";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About";
import Projects from "./components/Projects/Project.jsx";
import Footer from "./components/Layouts/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
