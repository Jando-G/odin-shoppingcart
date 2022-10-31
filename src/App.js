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
  const [cart, setCart] = useState({});
  return (
    <Router>
      <div className="App">
        <NavBar count={cart.length} />
        <div className="Content">
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route index element={<Home />} />
            <Route path = "earn" element={<Earn />} />
            <Route path = "cart" element={<Cart />} />
            <Route path = "shop" element={<Shop />} />

            {/* Item pages Start here */}
            <Route path="products/Programming"
            element={<ItemPage price="404" title="Programming Humor"/>}/>
            <Route path="products/Dark"
            element={<ItemPage price="500" title="Dark Humor"/>}/>
            <Route path="products/Spooky"
            element={<ItemPage price="666" title="Spooky Jokes"/>}/>
            <Route path="products/Christmas"
            element={<ItemPage price="150" title="Christmas Jokes"/>}/>
            <Route path="products/Pun"
            element={<ItemPage price="10" title="Puns"/>}/>
            <Route path="products/Misc"
            element={<ItemPage price="80" title="Miscellaneous"/>}/>
            <Route path="products/Any"
            element={<ItemPage price="100" title="Random Joke (All Categories)"/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
