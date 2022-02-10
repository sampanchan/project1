import logo from './logo.svg';
import react, {useEffect, useState} from 'react';
import './App.scss';

import { 
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from "./views/Home";
import Cart from "./views/Cart";
import Shop from "./views/Shop";

function App() {
  const [ menuOpen, setMenuOpen ] = useState(false);
  console.log("clicked");

  const sidebarStyles = menuOpen ? 'sidebar sidebar--open' : 'sidebar';
  const overlayStyles = menuOpen ? 'overlay overlay--open' : 'overlay';
  return (
    <BrowserRouter>
    <div className="App">
      <aside className={sidebarStyles}>
        Welcome!
        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </aside>
      <div className={overlayStyles} onClick={() => setMenuOpen(false)}></div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}
// const Home = () => (
//   <div>Home</div>
// );
// const Cart = () => (
//   <div>Cart</div>
// );
// const Shop = () => (
//   <div>Shop</div>
// );

export default App;
