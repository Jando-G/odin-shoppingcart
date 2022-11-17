import './App.css'
import Cart from './Components/Cart';
import Earn from './Components/Earn';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Shop from './Components/Shop';
import Footer from './Components/Footer';
import ItemPage from './Components/ItemPage';
import { useState, setState, createContext } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [cart, setCart] = useState([]);
  const updateCart = (items) => {
    const newCart = cart.concat(items);
    setCart(newCart);
  }
  const countCart = () => {
    let total = 0;
    cart.forEach((item) => {
      total+= item[Object.keys(item)[0]];
    })
    return total;
  }
  return (
    <Router>
      <div className="App">
        <NavBar count={countCart()} />
        <div className="Content">
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route index element={<Home />} />
            <Route path = "earn" element={<Earn />} />
            <Route path = "cart" element={<Cart 
            updateCart={updateCart} 
            cart={cart}/>} />
            <Route path = "jokes" element={<Shop />} />

            {/* Item pages Start here */}
            <Route path="jokes/Programming"
            element={<ItemPage
            category="Programming"
            title="Programming Humor"
            updateCart={updateCart}/>}/>
            <Route path="jokes/Dark"
            element={<ItemPage
            category="Dark"
            title="Dark Humor"
            updateCart={updateCart}/>}/>
            <Route path="jokes/Spooky"
            element={<ItemPage
            category="Spooky"
            title="Spooky Jokes"
            updateCart={updateCart}/>}/>
            <Route path="jokes/Christmas"
            element={<ItemPage
            category="Christmas"
            title="Christmas Jokes"
            updateCart={updateCart}/>}/>
            <Route path="jokes/Pun"
            element={<ItemPage
            category="Puns"
            title="Puns"
            updateCart={updateCart}/>}/>
            <Route path="jokes/Misc"
            element={<ItemPage
            category="Misc"
            title="Miscellaneous"
            updateCart={updateCart}/>}/>
            <Route path="jokes/Any"
            element={<ItemPage
            category="Any"
            title="Random Joke (All Categories)"
            updateCart={updateCart}/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
