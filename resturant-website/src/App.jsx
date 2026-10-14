import React, { useState } from 'react';
import { CartContextProvider } from './store/CartContext';
import Header from './components/Header';
import Meals from './components/Meals';
import Cart from './components/Carts';

function AppContent() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler() {
    setCartIsShown(true);
  }

  function hideCartHandler() {
    setCartIsShown(false);
  }

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />

      <main>
        <section className="summary">
          <h2>Delicious Food, Delivered To You</h2>

          <p>
            Choose your favorite meal from our broad selection of
            available meals and enjoy a delicious lunch or dinner at home.
          </p>

          <p>
            All our meals are cooked with high-quality ingredients,
            just-in-time and of course by experienced chefs!
          </p>
        </section>

        <Meals />
      </main>
    </>
  );
}

function App() {
  return (
    <CartContextProvider>
      <AppContent />
    </CartContextProvider>
  );
}

export default App;