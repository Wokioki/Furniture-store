import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Offer() {

  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });  
    setTimeout(() => navigate('/shop'), 300);
  };
  
  return (
    <section className="offer">
      <p>Order now for an express delivery in 24h!</p>
      <button className="offer__button" onClick={handleClick}>
      View more
      </button>
    </section>
  );
}