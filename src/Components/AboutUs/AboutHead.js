import React from 'react';
import logo from '../../images//Logo/logo.png';
import cart from '../../images/Home/cart.png';
import aboutBg from '../../images/About us/header.png';
import { Link } from 'react-router-dom';

export default function AboutHeader() {
  return (
    <header 
    className="about-header" 
    style={{ backgroundImage: `url(${aboutBg})` }}>
      <div className="about-header__top">
        <img src={logo} alt="Logo" className="about-header__logo" />
        <nav className="about-header__nav">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About us</Link>
            <Link to="#">Blog</Link>
        </nav>
        <button className='header__cart'><img src={cart} alt ="cart" className='cart'></img></button>
      </div>
      <h1 className="about-header__title">About us</h1>
    </header>
  );
}