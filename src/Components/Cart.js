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
    console.log(itemCpy);
    props.updateCart(itemCpy);
  }
  const incrementCount = (e, itemName) => {
    let itemCpy = {}
    itemCpy[itemName] = 1;
    props.updateCart(itemCpy);
  }
  const decrementCount = (e, itemName) => {
    let itemCpy = {}
    console.log(props.cart[itemName])
    if(props.cart[itemName] > 1) {
      itemCpy[itemName] = -1;
    }
    else {
      itemCpy[itemName] = 0;
    }
    console.log(itemCpy)
    props.updateCart(itemCpy);
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
              <div>{parseStr(item)}</div>
              <div className="Counter-small" name="counter">
                <div className="SubBtn" onClick={e => decrementCount(e, item)}>-</div>
                <input value={props.cart[item]} onChange={e => handleChange(e, item)} className="Count" type="number" name="Count" min="1"/>
                <div className="AddBtn" onClick={e => incrementCount(e, item)}>+</div>
              </div>
              <div>${props.cart[item] * 10}</div>
            </div>)}
          <div>
            <div></div>
            <div></div>
            <div className="CartFoot">
              <div>Total: ${}</div>
              <div>Check Out</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cart;
  