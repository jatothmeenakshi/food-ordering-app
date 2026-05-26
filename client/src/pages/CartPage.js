import React from 'react';

function CartPage({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your Cart 🛒</h2>
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
        </>
      )}
    </div>
  );
}

const styles = {
  container: { padding: '30px', maxWidth: '600px', margin: '0 auto' },
  heading: { textAlign: 'center', color: '#333' },
  empty: { textAlign: 'center', color: '#666', fontSize: '18px' },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '8px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  total: {
    textAlign: 'right',
    fontSize: '20px',
    marginTop: '20px',
    color: '#ff6b35'
  }
};

export default CartPage;