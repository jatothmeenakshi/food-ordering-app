import React from 'react';
function Navbar({cartCount,onShowOrders,onShowMenu,user,onLogout}){
    return (
        <nav style={styles.nav}>
            <h1 style={styles.logo} onClick={onShowMenu}>🍔 FoodApp</h1>
            <div style={styles.links}>
                <span style={styles.link} onClick={onShowOrders}>📋 Orders</span>
                <span style={styles.cartIcon}> 🛒 Cart ({cartCount})</span>
                <span style={styles.user}>👤 {user}</span>
                <button style={styles.logoutBtn} onClick={onLogout}>Logout</button>
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
        fontSize:'24px',
        cursor:'pointer'
    },
    links:{
        display:'flex',alignItems:'center',gap:'20px'
    },
    link:{
        fontSize:'16px',cursor:'pointer'
    },
    cartIcon:{
        fontSize:'18px',
        cursor:'pointer'
    },
    user:{fontSize:'18px',cursor:'pointer'},
    logoutBtn:{
        backgroundColor:'white',
        color:'#ff6b35',
        border:'none',
        padding:'6px 12px',
        borderRadius:'6px',
        cursor:'pointer',
        fontWeight:'bold'
    }
};
export default Navbar;