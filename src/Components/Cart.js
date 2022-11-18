function Cart(props) {
  
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
              <div>{props.cart[item]}</div>
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
  