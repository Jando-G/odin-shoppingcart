import './App.css'
import Cart from './Components/Cart';
import Earn from './Components/Earn';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Shop from './Components/Shop';
import Footer from './Components/Footer';
import ItemPage from './Components/ItemPage';
import Thanks from './Components/Thanks';
import { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [cart, setCart] = useState([]);
  const [cooks, setCooks] = useState(0);
  const [count, setCount] = useState(0); //only exists so nav updates on setCart
//will remove count state if it somehow gets fixed
  const incrementCooks = () => {
    setCooks(c => c + 1);
  }
  const spendCooks = (cost) => {
    let newTotal = cooks;
    newTotal -= cost;
    setCooks(newTotal);
  }
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
  const deleteItem = item => {
    let newCart = cart;
    delete newCart[item];
    setCart(newCart);
    setCount(countCart(newCart))
  }
  const countCart = (list) => {
    let total = 0;
    for (const item in list) {
      total += list[item];
    }
    return total;
  }
  const clearCart = () => {
    setCart([]);
  }
  return (
    <Router basename='/app'>
      <div className="App">
        <NavBar count={countCart(cart)} cookies={cooks}/>
        <div className="Content">
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route index element={<Home />} />
            <Route path = "earn" element={<Earn
            incrementCooks={incrementCooks} />} />
            <Route path = "cart" element={<Cart 
            updateCart={updateCart} 
            deleteItem={deleteItem}
            spendCooks={spendCooks}
            cooks={cooks}
            cart={cart}/>} />
            <Route path = "thanks" element={<Thanks clearCart={clearCart} cart={cart}/>} />
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
