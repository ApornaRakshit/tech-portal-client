import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import AnimatedRoadmapScroll from "./AnimatedRoadmapScroll";


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 data-aos="fade-up">Vite + React</h1>

      <div className="card" data-aos="fade-right">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs" data-aos="fade-left">
        Click on the Vite and React logos to learn more
      </p>
      <AnimatedRoadmapScroll />
    </>
  );
}

export default App;

