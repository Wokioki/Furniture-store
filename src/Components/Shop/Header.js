import React from 'react';
import logo from '../../images/Logo/logo.png';
import cart from '../../images/Home/cart.png';
import account from '../../images/Logo/account.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="shop-header">
      <div className="shop-header__top">
        <img src={logo} alt="FurniTrend Logo" className="shop-header__logo" />
        <nav className="shop-header__nav">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About us</Link>
          <Link to="#">Blog</Link>
        </nav>
        <div className="header__icons">
                    <button className='header__cart'>
                      <img src={cart} alt="cart" className='cart' />
                    </button>
                    <button className='header__account'>
                      <img src={account} alt="account" className='account-icon' />
                    </button>
                </div>
      </div>
    </header>
  );
}