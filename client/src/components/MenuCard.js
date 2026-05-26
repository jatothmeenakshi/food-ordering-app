import React from 'react';
function MenuCard({name,category,price,description,addToCart}){
    return(
        <div style={styles.card}>
            <div style={styles.emoji}>🍽️</div>
            <h3 style={styles.name}>{name}</h3>
            <p style={styles.category}>{category}</p>
            <p style={styles.description}>{description}</p>
            <div style={styles.footer}>
                <span style={styles.price}>₹{price}</span>
                <button style={styles.button} onClick={addToCart}>Add to Cart</button>
               
            </div>
        </div>
    );
}
const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    width: '250px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  emoji: { fontSize: '40px', textAlign: 'center' },
  name: { margin: '10px 0 5px', fontSize: '18px' },
  category: { color: '#ff6b35', fontSize: '12px', margin: '0' },
  description: { color: '#666', fontSize: '14px' },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontWeight: 'bold', fontSize: '18px' },
  button: {
    backgroundColor: '#ff6b35',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default MenuCard;
