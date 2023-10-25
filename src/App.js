import "./App.css";
import { Navbar } from "./components/Navbar";
import { Title } from "./components/Title";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
