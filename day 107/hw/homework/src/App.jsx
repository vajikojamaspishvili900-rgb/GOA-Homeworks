import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

// 1. რა არის useState React-ში და რისთვის ვიყენებთ მას?

// 2. რა განსხვავებაა ჩვეულებრივ ცვლადსა და useState-ით შექმნილ ცვლადს შორის?

// 3. შექმენი Counter კომპონენტი, რომელიც useState-ის გამოყენებით შეინახავს რიცხვს. დაამატე ორი ღილაკი: ერთი გაზრდის რიცხვს 1-ით, მეორე კი შეამცირებს 1-ით.

// 4. შექმენი Toggle კომპონენტი, რომელიც useState-ის გამოყენებით შეინახავს true ან false მნიშვნელობას. ღილაკზე დაჭერისას გამოაჩინე ან დამალე ტექსტი "Hello React".

// 5. შექმენი ColorChanger კომპონენტი, რომელიც useState-ის გამოყენებით შეინახავს ფერს. დაამატე სამი ღილაკი: "Red", "Green" და "Blue". თითოეულ ღილაკზე დაჭერისას შეცვალე div ელემენტის ფონის ფერი შესაბამისი ფერით.

// 1.
// useState React-ის Hook-ია, რომელიც ფუნქციურ კომპონენტში მდგომარეობის (state) შესანახად და შესაცვლელად გამოიყენება. მდგომარეობის შეცვლისას React კომპონენტს ხელახლა არენდერებს.

// 2.
// ჩვეულებრივი ცვლადის შეცვლა კომპონენტს ხელახლა არ არენდერებს და ხელახალი რენდერისას მისი მნიშვნელობა თავიდან იქმნება. useState-ით შენახული მნიშვნელობა კი რენდერებს შორის ნარჩუნდება; მისი განახლება კომპონენტს ხელახლა არენდერებს.

// 3,4,5.
function App() {
  // 3
  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>რიცხვი: {count}</p>
        <button onClick={() => setCount(count + 1)}>გაზრდა</button>
        <button onClick={() => setCount(count - 1)}>შემცირება</button>
      </div>
    );
  }

  // 4
  function Toggle() {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "დამალე" : "გამოაჩინე"}
        </button>

        {isVisible && <p>Hello React</p>}
      </div>
    );
  }

  // 5
  function ColorChanger() {
    const [color, setColor] = useState("white");

    return (
      <div>
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("blue")}>Blue</button>
        <button onClick={() => setColor("black")}>Black(N)</button>
        <button onClick={() => setColor("white")}>White</button>

        <div
          style={{
            backgroundColor: color,
            width: "200px",
            height: "100px",
            marginTop: "12px",
            borderRadius: "20px"
          }}
        />
      </div>
    );
  }

  // აქ ვაბრუნებთ ზემოთ შექმნილ ფუნქციებს
  return (
    <main className="app">
      <h1>useState სავარჯიშოები</h1>

      <section className="card">
        <h2>Counter</h2>
        <Counter />
      </section>

      <section className="card">
        <h2>Toggle</h2>
        <Toggle />
      </section>

      <section className="card">
        <h2>Color Changer</h2>
        <ColorChanger />
      </section>
    </main>
  );
}
export default App;