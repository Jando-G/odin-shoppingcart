import { Link } from "react-router-dom";
import bag from '../Assets/cart-outline.png';
function NavBar(props) {
  
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
            <Link to="jokes">Jokes</Link>
         </li>
         <li>
            <Link to="earn">Earn</Link>
         </li>
         <li>
            <Link to="cart" className='Cart'>
              <img src={bag} alt="cart" />
              <div data-testid="cart-count">{props.count ? props.count : 0}</div>
            </Link>
         </li>
     </ul>
    </nav>
  );
}

export default NavBar;
