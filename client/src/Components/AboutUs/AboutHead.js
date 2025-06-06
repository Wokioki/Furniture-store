import React, { useState } from 'react';
import AccountPopup from '../Account/AccountPopup';
import logo from '../../images//Logo/logo.png';
import cart from '../../images/Home/cart.png';
import aboutBg from '../../images/About us/header.png';
import account from '../../images/Logo/account.png';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function AboutHeader({ user, setUser }) {
  const [showPopup, setShowPopup] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);


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
            <Link to="/blog">Blog</Link>
        </nav>
        <div className="header__icons">
            <Link to="/cart" className="header__cart">
                <img src={cart} alt="cart" className="cart" />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
            <button className='header__account' onClick={() => setShowPopup(true)} >
              <img src={account} alt="account" className='account-icon' />
            </button>
          </div>
      </div>
      <h1 className="about-header__title">About us</h1>
      {showPopup && (
        <AccountPopup onClose={() => setShowPopup(false)} user={user} setUser={setUser} />
      )}
    </header>
  );
}