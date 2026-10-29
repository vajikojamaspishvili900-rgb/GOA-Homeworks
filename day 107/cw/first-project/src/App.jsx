import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";



// 1) იმუშავეთ app.jsxში, დაამატეთ ორი ღილაკი, პირველის დაჭერისას countს უნდა დააკლდეს 1, ხოლო მეორის დაჭერისას count უნდა გახდეს 0


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <section id="center">
        <h1>Get started</h1>

        <p>Count is {count}</p>

        <button
          type="button"
          className="counter"
          onClick={() => setCount(count + 1)}
        >
          increase
        </button>

        <button
          type="button"
          className="counter"
          onClick={() => setCount(count - 1)}
        >
          decrease
        </button>

        <button
          type="button" 
          className="counter" 
          onClick={() => setCount(0)}>
          clear
        </button>

      </section>
    </>
  );
}
export default App;



