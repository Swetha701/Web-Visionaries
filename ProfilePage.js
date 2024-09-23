import React from 'react';

const ProfilePage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Profile</h2>
      <div style={styles.profileInfo}>
        <p style={styles.info}>Name: John Doe</p>
        <p style={styles.info}>Email: john.doe@example.com</p>
        <p style={styles.info}>Graduation Year: 2024</p>
        <p style={styles.info}>Major: Computer Science</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundImage: `url("https://img.freepik.com/premium-vector/autumn-falling-leaves-background_29865-1526.jpg?w=1060")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover', // Ensures the background covers the entire page
    height: '100vh', // Ensures the page takes full height
    backgroundColor: 'transparent',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
  },
  profileInfo: {
    marginTop: '20px',
  },
  info: {
    fontSize: '18px',
    marginBottom: '10px',
  },
};

export default ProfilePage;
