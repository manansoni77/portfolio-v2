import "./App.css";
import { Title } from "./components/Title";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Title />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
