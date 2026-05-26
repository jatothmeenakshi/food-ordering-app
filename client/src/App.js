import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MenuPage from './pages/MenuPage';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
      const clearCart=()=>{
        setCart([]);

      };
  return (
    <div>
      <Navbar cartCount={cart.length} />
      <div style={{ display: 'flex' }}>
        <MenuPage addToCart={addToCart} />
        <Cart cart={cart} onOrderPlaced={clearCart}/>
      </div>
    </div>
  );
}

export default App;