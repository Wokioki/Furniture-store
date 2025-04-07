import React from 'react';
import logo from '../../images/Logo/logo.png';

export default function Header() {
  return (
    <header className="shop-header">
      <div className="shop-header__container">
        <img src={logo} alt="FurniTrend Logo" className="shop-header__logo" />
        <nav className="shop-header__nav">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="#">About us</a>
          <a href="#">Blog</a>
        </nav>
      </div>
    </header>
  );
}