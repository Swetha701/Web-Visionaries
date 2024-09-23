import React from 'react';

const JobList = () => {
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'Tech Co.' },
    { id: 2, title: 'Data Analyst', company: 'Data Inc.' },
    { id: 3, title: 'Project Manager', company: 'Business Ltd.' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Job Listings</h2>
      <ul style={styles.list}>
        {jobs.map(job => (
          <li key={job.id} style={styles.listItem}>
            <h3 style={styles.jobTitle}>{job.title}</h3>
            <p style={styles.company}>{job.company}</p>
          </li>
        ))}
      </ul>
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
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  jobTitle: {
    margin: '0',
    fontSize: '18px',
  },
  company: {
    margin: '0',
    color: '#555',
  },
};

export default JobList;
