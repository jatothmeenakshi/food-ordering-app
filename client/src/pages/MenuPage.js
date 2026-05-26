import React, { useState, useEffect } from 'react';
import MenuCard from '../components/MenuCard';

function MenuPage({addToCart}) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
      .then(res => res.json())
      .then(data => setMenuItems(data));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Menu</h2>
      <div style={styles.grid}>
        {menuItems.map(item => (
          <MenuCard
            key={item._id}
            name={item.name}
            category={item.category}
            price={item.price}
            description={item.description}
            addToCart={()=>addToCart(item)}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '30px', backgroundColor: '#f5f5f5', minHeight: '100vh' },
  heading: { textAlign: 'center', color: '#333', marginBottom: '30px' },
  grid: { display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }
};

export default MenuPage;