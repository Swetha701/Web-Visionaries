import React from 'react';

const MentorshipProgram = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Mentorship Program</h2>
      <p style={styles.paragraph}>
        Our mentorship program connects experienced alumni with recent graduates to provide guidance and support. If you're interested in becoming a mentor or finding one, please get in touch with us.
      </p>
      <h3 style={styles.subHeading}>Benefits of Mentorship</h3>
      <ul style={styles.list}>
        <li>Gain valuable insights from experienced professionals.</li>
        <li>Expand your professional network.</li>
        <li>Receive personalized guidance on career development.</li>
        <li>Improve your skills and knowledge in your field.</li>
      </ul>
      <p style={styles.callToAction}>
        Interested? <a href="/contact" style={styles.link}>Contact us</a> to learn more!
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
    backgroundSize: 'cover', // Ensures the background covers the entire page
    height: '100vh', // Ensures the page takes full height
    backgroundColor: 'transparent',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
  },
  subHeading: {
    textAlign: 'center',
    marginTop: '20px',
  },
  paragraph: {
    fontSize: '16px',
    textAlign: 'center',
    margin: '20px 0',
  },
  list: {
    listStyleType: 'none', // Removes bullet points
    padding: 0,
    textAlign: 'left',
    margin: '0 auto',
    maxWidth: '400px', // Optional: limit the width of the list
  },
  callToAction: {
    textAlign: 'center',
    marginTop: '20px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default MentorshipProgram;
