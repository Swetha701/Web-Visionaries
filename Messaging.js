import React, { useState } from 'react';

const Messaging = () => {
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    // Handle send message logic here
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Messages</h2>
      <div style={styles.messageArea}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
          placeholder="Type your message here..."
        />
        <button onClick={handleSend} style={styles.button}>Send</button>
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
  messageArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textarea: {
    width: '100%',
    maxWidth: '600px',
    height: '150px',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Messaging;
