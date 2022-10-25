import { Link } from "react-router-dom";
import bag from '../Assets/cart-outline.png';
function NavBar() {
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
            <Link to="cart">
              <img src={bag} alt="cart" />
            </Link>
         </li>
     </ul>
    </nav>
  );
}

export default NavBar;
