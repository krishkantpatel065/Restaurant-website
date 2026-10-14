import React, { useContext } from 'react';
import { CartContext } from '../store/CartContext';
import './Carts.css';

function Cart({ onClose }) {
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <div
        className="cart-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <h2>Your Shopping Cart</h2>

        {!hasItems && <p>Your cart is empty.</p>}

        {hasItems && (
          <ul className="cart-items">
            {cartCtx.items.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    ${item.price.toFixed(2)} × {item.amount}
                  </p>
                  <strong>
                    ${(item.price * item.amount).toFixed(2)}
                  </strong>
                </div>

                <div className="cart-item-actions">
                  <button
                    type="button"
                    onClick={() => cartCtx.removeItem(item.id)}
                    aria-label={`Remove one ${item.name}`}
                  >
                    −
                  </button>
                  <span>{item.amount}</span>
                  <button
                    type="button"
                    onClick={() =>
                      cartCtx.addItem({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        amount: 1,
                      })
                    }
                    aria-label={`Add one ${item.name}`}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="cart-total">
          <span>Total Amount</span>
          <span>${cartCtx.totalAmount.toFixed(2)}</span>
        </div>

        <div className="cart-actions">
          <button
            type="button"
            className="close-button"
            onClick={onClose}
          >
            Close
          </button>

          {hasItems && (
            <button
              type="button"
              className="order-button"
              onClick={() => {
                alert('Order placed successfully!');
                cartCtx.clearCart();
                onClose();
              }}
            >
              Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;