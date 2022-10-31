import { useParams } from "react-router-dom";
import { useState, setState } from 'react';
import { Link } from "react-router-dom";
function ItemPage(props) {
  const [amount, setAmount] = useState(1);
    let params = useParams();
    const incrementCount = () => {
      if(isNaN(amount)) {
        setAmount(1);
        console.log('set to 1')
      }
      else {
        setAmount(count => parseInt(count) + 1);
        console.log('add 1')
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
      if((e.target.value > 0 && !isNaN(e.target.value)) || e.target.value === '') {
        setAmount(e.target.value);
      }
      else {
        setAmount(1);
      }
    }
    return (
      <div className="ItemPage">
          <h2>{props.title}</h2>
          <p>${props.price * amount}</p>
          <label htmlFor="agreement">ALL SALES ARE FINAL</label>
          <select id="agreement" name="agreement">
            <option>I aknowledge and accept this condition</option>
          </select>
          <label htmlFor="type">Joke Type</label>
          <select id="type" name="type">
            <option>One-liner</option>
            <option>Two-parter</option>
          </select>
          <div className="CountContainer">
            <div>Quantity</div>
            <div className="Counter" name="counter">
              <div className="SubBtn" onClick={decrementCount}>-</div>
              <input value={amount} onChange={handleChange} className="Count" type="number" name="Count" min="1"/>
              <div className="AddBtn" onClick={incrementCount}>+</div>
            </div>
          </div>
          <Link to="/cart">
            <div className="BuyBtn">Add to Cart</div>
          </Link>
      </div>
    );
  }
  
  export default ItemPage;
  