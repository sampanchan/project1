import logo from './logo.svg';
import react, {useEffect, useState} from 'react';
import './App.scss';

import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


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
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/cart">Cart</a></li>
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
const Home = () => (
  <div>Home</div>
);
const Cart = () => (
  <div>Cart</div>
);
const Shop = () => (
  <div>Shop</div>
);

export default App;
