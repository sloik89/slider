import "./App.css";
import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < 0) {
      setIndex(people.length - 1);
    } else if (index > people.length - 1) {
      setIndex(0);
    }
  }, [index]);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);
  return (
    <div className="section">
      <div className="title">
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((item, idx) => {
          const { id, image, name, title, quote } = item;
          let position = "next-slide";
          if (idx === index) {
            position = "active-slide";
          }
          if (idx === index - 1 || (index === 0 && idx === people.length - 1)) {
            position = "last-slide";
          }
          return (
            <article className={`${position}`} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="text">{title}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="btn-left btn" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="btn-right btn" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default App;
