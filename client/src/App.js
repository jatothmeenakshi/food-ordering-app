import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MenuPage from './pages/MenuPage';
import OrderHistory from './pages/OrderHistory';
import Cart from './components/Cart';
import AuthPage from './pages/AuthPage';

function App() {
  const [cart, setCart] = useState([]);
  const [page,setPage]=useState('menu');
  const [user,setUser]=useState(localStorage.getItem('name'));

  const addToCart = (item) => {
    const existing=cart.find(i=>i._id===item._id);
    if(existing){
      setCart(cart.map(i=>
        i._id===item._id?{ ...i,quantity:i.quantity+1}:i

      ));
    }else{
      setCart([...cart,{ ...item,quantity:1}]);
    }
  };
  const removeFromCart=(itemId)=>{
    setCart(cart.filter(i=>i._id!==itemId));

  };
      const clearCart=()=>{
        setCart([]);

      };
      const handleLogin=(name)=>{
        setUser(name);
      };
      const handleLogout=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        setUser(null);
      };
      if(!user){
        return <AuthPage onLogin={handleLogin}/>;
      }
  return (
    <div>
      <Navbar cartCount={cart.length}
       onShowOrders={()=>setPage('orders')} 
       onShowMenu={()=>setPage('menu')}
        user={user}
        onLogout={handleLogout}
        />
      <div style={{ display: 'flex' }}>
        {page==='menu'?(
          <MenuPage addToCart={addToCart}/>
        ):(
          <OrderHistory/>
        
        )}
     
        <Cart cart={cart} onOrderPlaced={clearCart} removeFromCart={removeFromCart}/>
      </div>
    </div>
  );
}

export default App;