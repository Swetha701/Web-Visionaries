import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>Follow us on social media</p>
      <div style={styles.socialIcons}>
        <div style={styles.socialIcon} className="instagram">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
              alt="Instagram"
              style={styles.icon}
            />
          </a>
        </div>
        <div style={styles.socialIcon} className="linkedin">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG7.png"
              alt="LinkedIn"
              style={styles.icon}
            />
          </a>
        </div>
        <div style={styles.socialIcon} className="facebook">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png"
              alt="Facebook"
              style={styles.icon}
            />
          </a>
        </div>
      </div>
      <p style={styles.text}>&copy; 2024 Alumni Networking Platform | All Rights Reserved</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "10px 0", // Reduced padding
    backgroundColor: "#f8f8f8",
    position: "fixed",
    width: "100%",
    bottom: "0",
    marginTop: "20px", // Adds space above the footer to prevent overlap
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px", // Reduced gap between icons
    marginBottom: "5px", // Reduced margin below social icons
  },
  socialIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px", // Adjusted width
    height: "40px", // Adjusted height
    borderRadius: "50%", // Keeps the background circular
    transition: "transform 0.3s ease, background-color 0.3s ease",
  },
  icon: {
    width: "24px", // Adjusted icon size
    height: "24px", // Adjusted icon size
    transition: "transform 0.3s ease",
  },
  text: {
    margin: "5px 0", // Reduced margin for text
  },
};

export default Footer;
