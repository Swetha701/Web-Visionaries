import React, { useState } from 'react';

const JobPost = () => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');

  const handlePost = (e) => {
    e.preventDefault();
    // Handle job posting logic here
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Post a Job</h2>
      <form onSubmit={handlePost} style={styles.form}>
        <label style={styles.label}>
          Job Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Company:
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <button type="submit" style={styles.button}>Post Job</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    margin: '5px 0',
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

export default JobPost;
