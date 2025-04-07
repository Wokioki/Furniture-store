import React, { useState } from 'react';

const quotes = [
  {
    text: "Everything is designed. Few things are designed well.",
    author: "Brian Reed",
  },
  {
    text: "Design is not for philosophy, it’s for life.",
    author: "Issey Miyake",
  },
  {
    text: "Color does not add a pleasant quality to design – it reinforces it.",
    author: "Pierre Bonnard",
  },
];

export default function Quote() {
  const [index, setIndex] = useState(0);

  const prevQuote = () => {
    setIndex((index - 1 + quotes.length) % quotes.length);
  };

  const nextQuote = () => {
    setIndex((index + 1) % quotes.length);
  };

  return (
    <section className="quote-slider">
      <blockquote>
        <p>{quotes[index].text}</p>
        <cite>— {quotes[index].author}</cite>
      </blockquote>
      <div className="quote-slider__buttons">
      <button onClick={prevQuote}>⬅</button>
      <button onClick={nextQuote}>➡</button>
      </div>
    </section>
  );
}