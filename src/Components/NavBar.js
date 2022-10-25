import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
        {/* Empty ul for keeping logo centered */}
        <ul></ul>
        <div id="Logo">
          <Link to="">Joke Store</Link>
        </div>
    <ul className="ul2">
         <li>
            <Link to="shop">Shop</Link>
         </li>
         <li>
            <Link to="earn">Earn</Link>
         </li>
         <li>
            <Link to="cart">cart</Link>
         </li>
     </ul>
    </nav>
  );
}

export default NavBar;
