function Cart(props) {
  console.log(props.cart)
    return (
      <div className="CartContainer">
        <div className="Cart">
        <div>
            <div>Shopping Cart</div>
            <div>Quanitity</div>
            <div>Total</div>
          </div>
            {props.cart.map((item, i) => 
            <div key={i}>
              <div>{[Object.keys(item)[0]]}</div>
              <div>{item[Object.keys(item)[0]]}</div>
              <div>${item[Object.keys(item)[0]] * 10}</div>
            </div>)}
          <div>
            <div></div>
            <div></div>
            <div className="CartFoot">
              <div>Cost</div>
              <div>Check Out</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cart;
  