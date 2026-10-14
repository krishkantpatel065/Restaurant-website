import { useContext } from "react";
import { CartContext } from "../store/CartContext";

function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function submitHandler(event) {
    event.preventDefault();

    const enteredAmount = event.target.amount.value;
    const amount = Number(enteredAmount);

    if (!Number.isInteger(amount) || amount < 1 || amount > 5) {
      return;
    }

    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      amount,
    });

    event.target.reset();
  }
  return (
    <li className="meal-item">
      <div className="meal-details">
        <h3>{meal.name}</h3>
        <p className="meal-description">{meal.description}</p>
        <p className="meal-price">${meal.price.toFixed(2)}</p>
      </div>

      <form className="meal-form" onSubmit={submitHandler}>
        <div className="quantity-control">
          <label htmlFor={`amount-${meal.id}`}>Amount</label>
          <input
            id={`amount-${meal.id}`}
            type="number"
            min="1"
            name="amount"
            max="5"
            step="1"
            defaultValue="1"
          />
        </div>

        <button type="submit">+ Add</button>
      </form>
    </li>
  );
}
export default MealItem;
