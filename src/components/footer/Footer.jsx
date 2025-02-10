import React from 'react';
import "./footer.css";

const Footer = ({ text, links, logoPath }) => {
  return (
    <div className="footer">
      <p className="footer-text">{text}</p>
      <ul className="footer-links">
        {links.map((link, index) => (
          <li key={index} className="footer-link-item">
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;