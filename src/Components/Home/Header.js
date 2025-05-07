import React, { useState } from 'react';
import AccountPopup from '../Account/AccountPopup';
import logo from '../../images/Logo/logo.png';
import background from '../../images/Home/header.png';
import cart from '../../images/Home/cart.png';
import account from '../../images/Logo/account.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });  
    setTimeout(() => navigate('/shop'), 300);   
  };

  const [showPopup, setShowPopup] = useState(false);
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${background})` }}
    >
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

      <div className="header__content">
        <h1>All for your home</h1>
        <p>
          High-quality furniture fittings for your interior<br />
          Find the perfect fittings for your furniture<br />
          from reliable hinges to stylish handles
        </p>
          <button className="header__button" onClick={handleClick}>
            View more
          </button>
      </div>
      {showPopup && (
        <AccountPopup
          onClose={() => setShowPopup(false)}
          user={user}
          setUser={setUser}
        />
      )}
    </header>
  );
}