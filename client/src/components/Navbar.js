import React from 'react';
function Navbar({cartCount}){
    return (
        <nav style={styles.nav}>
            <h1 style={styles.logo}>🍔 FoodApp</h1>
      <div style={styles.cartIcon}>
         🛒 Cart ({cartCount})
      </div>
        </nav>
    );
}
const styles={
    nav:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#ff6b35',
        padding:'15px 30px',
        color:'white'
    },
    logo:{
        margin:0,
        fontSize:'24px'
    },
    cartIcon:{
        fontSize:'18px',
        cursor:'pointer'
    }
};
export default Navbar;