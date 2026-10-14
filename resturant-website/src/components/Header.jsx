import React, { useContext } from 'react';
import './Header.css';
import mealsImage from '../assets/meals.jpg';
import { CartContext } from '../store/CartContext';

function Header({onShowCart}) {
    const cartCtx = useContext(CartContext);
  return (
    <>
      <header className="header">
        <h1 className="header-title">ReactMeals</h1>

        <button className="cart-button" onClick={onShowCart}>
          <span className="cart-icon">🛒</span>
          <span>Your Cart</span>
          <span className="cart-count">{cartCtx.totalQuantity}  </span>
        </button>
      </header>

      <div className="main-image">
        <img src={mealsImage} alt="A buffet of delicious meals" />
      </div>
    </>
  );
}

export default Header;