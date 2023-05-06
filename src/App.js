import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* https://clipchamp.com/watch/EuVr8lVh2vz */}
      {/* <div style={{
        position: "relative",
        width: "fit-content",
        height: "fit-content"
      }}> */}

      {/* <a style="position:absolute;top:20px;right:1rem;opacity:0.8;" href="https://clipchamp.com/watch/EuVr8lVh2vz?utm_source=embed&utm_medium=embed&utm_campaign=watch"> */}
      {/* <a style={{
          position: "absolute",
          top: "20px",
          right: "1rem",
          opacity: "0.8"
        }} href="https://clipchamp.com/watch/EuVr8lVh2vz?utm_source=embed&utm_medium=embed&utm_campaign=watch">
          <img style={{ height: "22px" }} src="https://clipchamp.com/e.svg" alt="Made with Clipchamp" />
        </a>
        <iframe allow="autoplay;" allowfullscreen style={{
          border: "none"
        }} src="https://clipchamp.com/watch/EuVr8lVh2vz/embed" width="640" height="360"></iframe>
      </div> */}
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
