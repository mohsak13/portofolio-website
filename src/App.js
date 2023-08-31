import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavbarCom from "./components/NavbarCom";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="font">
      <NavbarCom />
      <Home />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
