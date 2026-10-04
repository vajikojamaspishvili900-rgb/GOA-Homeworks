import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';


const container = document.getElementById('app');
const root = createRoot(container);

const title = "";

const background = (
  <img 
    className="background" 
    alt="ocean" 
    src="/images/ocean.jpg" 
  />
);

const images = [];
for (let animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  const animal = e.target.alt;
  const facts = animals[animal].facts;
  const randomIndex = Math.floor(Math.random() * facts.length);
  const fact = facts[randomIndex];
  document.getElementById('fact').innerHTML = fact;
}

const showBackground = true;

const animalFacts = (
  <div>
    {showBackground && background}
    <h1>{title || "Click an animal for a fun fact"}</h1>
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

root.render(animalFacts);
