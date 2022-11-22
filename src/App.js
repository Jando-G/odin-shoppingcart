import './App.css'
import Cart from './Components/Cart';
import Earn from './Components/Earn';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Shop from './Components/Shop';
import Footer from './Components/Footer';
import ItemPage from './Components/ItemPage';
import { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0); //only exists so nav updates on setCart
//will remove count state if it somehow gets fixed
  const updateCart = (items) => {
    let newCart = cart;
    if(!newCart[Object.keys(items)[0]]) {
      newCart[Object.keys(items)[0]] = items[Object.keys(items)[0]];
    }
    else {
      newCart[Object.keys(items)[0]] += items[Object.keys(items)[0]];
    }
    setCart(newCart);
    setCount(countCart(newCart));
  }

  const countCart = (list) => {
    let total = 0;
    for (const item in list) {
      total += list[item];
    }
    return total;
  }

  return (
    <Router>
      <div className="App">
        <NavBar count={countCart(cart)} />
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
