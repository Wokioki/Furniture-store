import React from 'react';
import { useCart } from '../context/CartContext';
import './CartPage.css';
import { Link, useNavigate } from 'react-router-dom';

function CartPage({ user }) {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);


  if (!user) {
    return (
      <div className="cart-container">
        <h2>Your Cart</h2>
        <p style={{ textAlign: 'center', margin: '30px 0' }}>
          Please <button onClick={() => navigate('/')} className="login-btn">log in</button> to view your cart.
        </p>
      </div>
    );
  }


  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img
                src={`${item.image}`}
                alt={item.title}
              />
              <div className="info">
                <h4>{item.title}</h4>
                <p>${Number(item.price).toFixed(2)}</p>
                <div className="quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <h3>Total: ${total.toFixed(2)}</h3>
      <Link to="/shop">
        <button className="back-btn">← Back to shop</button>
      </Link>
    </div>
  );
}

export default CartPage;