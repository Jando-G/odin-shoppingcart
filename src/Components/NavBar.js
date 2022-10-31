import { Link } from "react-router-dom";
import bag from '../Assets/cart-outline.png';
function NavBar(props) {
  console.log(props)
  return (
    <nav>
        {/* Empty ul for keeping logo centered. kinda scuffed*/}
        <ul></ul>
        <div id="Logo">
          <div>
            <Link to="">Jokestore</Link>
          </div>
        </div>
    <ul className="ul2">
         <li>
            <Link to="shop">Shop</Link>
         </li>
         <li>
            <Link to="earn">Earn</Link>
         </li>
         <li>
            <Link to="cart" className='Cart'>
              <img src={bag} alt="cart" />
              <div>{props.count}</div>
            </Link>
         </li>
     </ul>
    </nav>
  );
}

export default NavBar;
