import { useState } from 'react';
import { Link } from "react-router-dom";
function ItemPage(props) {
  const [amount, setAmount] = useState(1);
    const addItem = () => {
      const type = document.getElementById('type');
      const order = props.category + type.value;
      let newItem = {};
      newItem[order] = amount;
      props.updateCart(newItem);
    }
    const incrementCount = () => {
      if(isNaN(amount)) {
        setAmount(1);
      }
      else {
        setAmount(count => parseInt(count) + 1);
      }
    }
    const decrementCount = () => {
      if(amount > 1 && !isNaN(amount)) {
        setAmount(count => parseInt(count) - 1);
      }
      else {
        setAmount(1);
      }
    }
    const handleChange = e => {
      const result = e.target.value.replace(/[^0-9]/gi, '');
      if(result > 0) {
        setAmount(parseInt(result));
      }
      else {
        setAmount(1);
      }
    }
    return (
      <div className="ItemPage">
          <h2>{props.title}</h2>
          <p>${10 * amount}</p>
          <label htmlFor="type">Joke Type</label>
          <select id="type" name="type">
            <option value="0">One-liner</option>
            <option value="1">Two-parter</option>
          </select>
          <div className="CountContainer">
            <div>Quantity</div>
            <div className="Counter" name="counter">
              <div className="SubBtn" onClick={decrementCount}>-</div>
              <input value={amount} onChange={handleChange} className="Count" type="number" name="Count" min="1"/>
              <div className="AddBtn" onClick={incrementCount}>+</div>
            </div>
          </div>
          <Link onClick={addItem} to="/cart">
            <div className="BuyBtn">Add to Cart</div>
          </Link>
      </div>
    );
  }
  
  export default ItemPage;
  