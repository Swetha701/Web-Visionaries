import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Alumni Networking Platform</h1>
      <p style={styles.paragraph}>
        Connect with fellow alumni, explore job opportunities, and stay in touch with your community.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundImage: `url("https://img.freepik.com/premium-vector/autumn-falling-leaves-background_29865-1526.jpg?w=1060")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: '100vh', 
    backgroundColor: 'transparent',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '16px',
    textAlign: 'center',
    margin: '20px 0',
  },
};

export default Home;
