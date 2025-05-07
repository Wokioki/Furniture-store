import React, { useState } from 'react';
import AccountPopup from '../Account/AccountPopup';
import logo from '../../images/Logo/logo.png';
import cart from '../../images/Home/cart.png';
import account from '../../images/Logo/account.png';
import { Link } from 'react-router-dom';

export default function BlogHeader({ user, setUser }) {
  const [showPopup, setShowPopup] = useState(false);

  
  return (
    <header className="header">
      <div className="header__top">
        <img src={logo} alt="FurniTrend Logo" className="header__logo" />
        <nav className="header__nav">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About us</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <div className="header__icons">
            <button className='header__cart'>
                <img src={cart} alt="cart" className='cart' />
            </button>
            <button className='header__account' onClick={() => setShowPopup(true)} >
                <img src={account} alt="account" className='account-icon' />
            </button>
        </div>
      </div>
      {showPopup && (
        <AccountPopup onClose={() => setShowPopup(false)} user={user} setUser={setUser} />
      )}
    </header>
  );
}