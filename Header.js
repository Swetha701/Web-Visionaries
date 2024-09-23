import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header" style={styles.header}>
    <div className="logo" style={styles.logo}>
      <img
        src="https://www.pngkey.com/png/detail/553-5531812_next-gambar-logo-alumni-png.png" // Replace with your actual logo URL
        alt="Logo"
        style={styles.logoImage} // Adjust as needed
      />
      <h1 style={styles.title}>Network</h1>
    </div>

    <nav>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/login" style={styles.navLink}>Login</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/register" style={styles.navLink}>Sign Up</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/profile" style={styles.navLink}>Profile</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/job-list" style={styles.navLink}>Job Board</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/search-alumni" style={styles.navLink}>Search Alumni</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/messaging" style={styles.navLink}>Messaging</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/emergency-assistance" style={styles.navLink}>Emergency Assistance</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/mentorship-program" style={styles.navLink}>Mentorship Program</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/alumni-map" style={styles.navLink}>Alumni Map</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center', // Aligns items vertically
    justifyContent: 'space-between', // Space between logo and navigation
    padding: '10px 20px', // Reduced padding for height
    
  },
  logo: {
    display: 'flex',
    alignItems: 'center', // Aligns logo and title vertically
  },
  logoImage: {
    height: '40px', // Adjust logo height
    marginRight: '10px', // Space between logo and title
  },
  title: {
    fontSize: '24px', // Adjust title size if needed
    margin: 0, // Remove default margin
  },
  navList: {
    display: "flex",
    justifyContent: "space-around",
    listStyleType: "none",
    padding: 0,
    margin: 0,
    fontSize: '16px',
  },
  navItem: {
    margin: '0 15px', // Space between nav items
  },
  navLink: {
    textDecoration: "none", // Removes underline
    color: "#333", // Adjust link color as needed
    padding: "10px 5px", // Reduced padding for links
  },
};

export default Header;
