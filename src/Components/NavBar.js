import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
     <ul>
         <li>
             <Link to="/">Home</Link>
         </li>
         <li>
            <Link to="about">About</Link>
         </li>
    </ul>
        <div id="Logo">
            Joke Store
        </div>
    <ul>
         <li>
            <Link to="shop">Shop</Link>
         </li>
         <li>
            <Link to="earn">Earn</Link>
         </li>
         <li>
            Spend
         </li>
     </ul>
    </nav>
  );
}

export default NavBar;
