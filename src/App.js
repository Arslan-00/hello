import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Service from "./components/Services/Service";
import Contact from "./components/Contact/Contact";

import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      
  
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
