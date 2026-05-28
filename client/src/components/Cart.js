import React from 'react';

function Cart({ cart,onOrderPlaced,removeFromCart }) {
   console.log('Cart items:',cart);
  const total = cart.reduce((sum, item) => sum + item.price*item.quantity, 0);
   const placeOrder = async () => {
    if (cart.length === 0) return;

    const orderData = {
      items: cart.map(item => ({ name: item.name, price: item.price })),
      total: total
    };

    try {
      const response = await fetch('https://food-ordering-backend-8hx3.onrender.com/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      if (response.ok) {
        alert('Order placed successfully! 🎉');
        onOrderPlaced();
      }
    } catch (err) {
      alert('Something went wrong!');
    }
   
  };
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p style={styles.empty}>Your cart is empty!</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item._id} style={styles.cartItem}>
            <div>
              <p style={styles.itemName}>{item.name}</p>
              <p style={styles.itemPrice}>₹{item.price*item.quantity}</p>
              </div>
              <div style={styles.controls}>
                <span style={styles.quantity}>x{item.quantity}</span>
                <button style={styles.removeBtn} onClick={()=>removeFromCart(item._id)}>
                   ✕
                </button>
              </div>
              </div>
          ))}
        
          <div style={styles.total}>
            <strong>Total: ₹{total}</strong>
          </div>
          <button style={styles.orderBtn} onClick={placeOrder}>Place Order</button>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: '300px',
    minHeight: '100vh',
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '-2px 0 8px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: '0'
  },
  heading: { color: '#333', borderBottom: '2px solid #ff6b35', paddingBottom: '10px' },
  empty: { color: '#666', textAlign: 'center', marginTop: '50px' },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    padding: '10px 0',
    borderBottom: '1px solid #eee'
  },
   itemName: { margin: '0', fontWeight: 'bold' ,color:'#333'},
  itemPrice: { margin: '4px 0 0', color: '#ff6b35' },
  controls: { display: 'flex', alignItems: 'center', gap: '8px' },
  quantity: { fontSize: '14px', color: '#666' },
  removeBtn: {
    backgroundColor: '#ff4444',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    cursor: 'pointer',
    fontSize: '12px'
  },
  total: {
    textAlign: 'right',
    fontSize: '18px',
    margin: '15px 0',
    color: '#ff6b35'
  },
  orderBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#ff6b35',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default Cart;