import React from 'react';
import logo from '../../images/Logo/logo.png';
import background from '../../images/Home/header.png';
import cart from '../../images/Home/cart.png';

export default function Header() {
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="header__top">
        <img src={logo} alt="FurniTrend Logo" className="header__logo" />
        <nav className="header__nav">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="#">About us</a>
          <a href="#">Blog</a>
        </nav>
        <button className='header__cart'><img src={cart} alt ="cart" className='cart'></img></button>
      </div>

      <div className="header__content">
        <h1>All for your home</h1>
        <p>
          High-quality furniture fittings for your interior<br />
          Find the perfect fittings for your furniture<br />
          from reliable hinges to stylish handles
        </p>
        <button className="header__button">View more</button>
      </div>
    </header>
  );
}