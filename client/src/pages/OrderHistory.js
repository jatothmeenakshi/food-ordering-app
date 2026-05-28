import React, { useState, useEffect } from 'react';

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/orders')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📋 Order History</h2>
      {orders.length === 0 ? (
        <p style={styles.empty}>No orders yet!</p>
      ) : (
        orders.map(order => (
          <div key={order._id} style={styles.orderCard}>
            <div style={styles.orderHeader}>
              <span style={styles.orderId}>Order #{order._id.slice(-6)}</span>
              <span style={styles.status}>{order.status}</span>
            </div>
            {order.items.map((item, index) => (
              <div key={index} style={styles.item}>
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </div>
            ))}
            <div style={styles.total}>
              Total: ₹{order.total}
            </div>
            <div style={styles.date}>
              {new Date(order.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  container: { padding: '30px', maxWidth: '700px', margin: '0 auto' },
  heading: { textAlign: 'center', color: '#333', marginBottom: '30px' },
  empty: { textAlign: 'center', color: '#666' },
  orderCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  orderHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '15px' },
  orderId: { fontWeight: 'bold', color: '#333' },
  status: {
    backgroundColor: '#ff6b35',
    color: 'white',
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '12px'
  },
  item: { display: 'flex', justifyContent: 'space-between', padding: '5px 0', color: '#666' },
  total: { textAlign: 'right', fontWeight: 'bold', marginTop: '10px', color: '#ff6b35' },
  date: { textAlign: 'right', fontSize: '12px', color: '#999', marginTop: '5px' }
};

export default OrderHistory;