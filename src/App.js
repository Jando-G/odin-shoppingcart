import './App.css'
import About from './Components/About';
import Cart from './Components/Cart';
import Earn from './Components/Earn';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Shop from './Components/Shop';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="Content">
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path = "about" element={<About />} />
            <Route path = "shop" element={<Shop />} />
            <Route path = "earn" element={<Earn />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
