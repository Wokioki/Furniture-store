import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__column">
        <h4>About us</h4>
        <p>
          At FurniTrend, we believe that the right hardware makes all the difference. 
          For over 10 years, we’ve been providing top-quality furniture hardware for professionals, 
          DIY enthusiasts, and interior lovers across the country.
        </p>
      </div>
      <div className="footer__column">
        <h4>Social media</h4>
        <ul>
          <li><a href="https://www.instagram.com/">Instagram</a></li>
          <li><a href="https://pl-pl.facebook.com/login/">Facebook</a></li>
          <li><a href="https://x.com/%22%22">Twitter</a></li>
          <li><a href="https://www.youtube.com/">YouTube</a></li>
        </ul>
      </div>
      <div className="footer__column">
        <h4>Call Center</h4>
        <p>Email: callcenter@gmail.com</p>
        <p>Phone number: +1 222 555</p>
      </div>
    </footer>
  );
}