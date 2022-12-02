import { Link } from "react-router-dom";
import bag from '../Assets/cart-outline.png';
import cookieLogo from '../Assets/cookieLogo.png';

function NavBar(props) {
  return (
    <nav>
      {/*Kinda ugly but this ul helps center the logo*/}
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
          <Link to="earn" className="CookieLink">
            <img src={cookieLogo} alt="cookies" className="CookieLogo" />
            <div data-testid="cookie-count">{props.cookies ? props.cookies : ''}</div>
          </Link>
        </li>
        <li>
          <Link to="cart" className='CartLink'>
            <img src={bag} alt="cart" />
            <div data-testid="cart-count">{props.count ? props.count : ''}</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
