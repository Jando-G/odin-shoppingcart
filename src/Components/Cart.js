function Cart(props) {
  const handleChange = (e, itemName) => {
    const result = e.target.value.replace(/[^0-9]/gi, '')
    let itemCpy = {};
    let shift;
    if(parseInt(result) > 0) {
      shift = result - props.cart[itemName];
      itemCpy[itemName] = parseInt(shift);
    }
    else {
      shift = 1 - props.cart[itemName];
      itemCpy[itemName] = shift;
    }
    props.updateCart(itemCpy);
  }
  const incrementCount = (itemName) => {
    let itemCpy = {}
    itemCpy[itemName] = 1;
    props.updateCart(itemCpy);
  }
  const decrementCount = (itemName) => {
    let itemCpy = {}
    if(props.cart[itemName] > 1) {
      itemCpy[itemName] = -1;
    }
    else {
      itemCpy[itemName] = 0;
    }
    props.updateCart(itemCpy);
  }
  const countTotal = (list) => {
    let total = 0;
    for (const item in list) {
      total += list[item];
    }
    return total;
  }
  const parseStr = (str) => {
    let strCpy = str.toString();
    const type = strCpy.charAt(strCpy.length - 1);
    strCpy = strCpy.slice(0, -1);
    if(type === '0') {
      strCpy = strCpy + ' (One-Liner)';
    }
    else {
      strCpy = strCpy + ' (Two-Parter)';
    }
    return strCpy;
  }
    return (
      <div className="CartContainer">
        <div className="Cart">
          <div>
            <div>Shopping Cart</div>
            <div>Quanitity</div>
            <div>Cost</div>
          </div>
        {Object.keys(props.cart).map((item, i) => 
          <div key={i}>
            <div>
              <div>{parseStr(item)}</div>
              <div className="Remove" onClick={()=> props.deleteItem(item)}>remove</div>
            </div>
            <div className="Counter-small" name="counter">
              <div className="SubBtn" onClick={() => decrementCount(item)}>-</div>
              <input value={props.cart[item]} onChange={e => handleChange(e, item)} className="Count" type="number" name="Count" min="1"/>
              <div className="AddBtn" onClick={() => incrementCount(item)}>+</div>
            </div>
            <div>${props.cart[item] * 10}</div>
          </div>)}
          <div>
            <div></div>
            <div></div>
            <div className="CartFoot">
              <div>Total: ${countTotal(props.cart) * 10}</div>
              <div className="CheckOut">Check Out</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cart;
  