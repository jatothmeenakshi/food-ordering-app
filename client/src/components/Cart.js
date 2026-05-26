import React from 'react';

function Cart({ cart,onOrderPlaced }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
   const placeOrder = async () => {
    if (cart.length === 0) return;

    const orderData = {
      items: cart.map(item => ({ name: item.name, price: item.price })),
      total: total
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
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
          {cart.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <span>{item.name}</span>
              <span>₹{item.price}</span>
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
    padding: '10px 0',
    borderBottom: '1px solid #eee'
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