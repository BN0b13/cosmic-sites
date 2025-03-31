import React from "react";
import "./App.css";
import logo from './logo.png';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Cosmic Sites Logo" className="logo" />
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Separate logo for mobile */}
      <img src={logo} alt="Cosmic Sites Logo" className="mobile-logo" />

      <section className="hero">
        <h2>Your Custom E-Commerce Site, Ready in Minutes</h2>
        <p>Launch, manage, and grow your online store effortlessly with Cosmic Sites.</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section id="features" className="features">
        <h2>Why Choose Cosmic Sites?</h2>
        <div className="feature-grid">
          <div className="feature-card">Instant Deployment</div>
          <div className="feature-card">Fully Customizable</div>
          <div className="feature-card">Secure Cloud Hosting</div>
          <div className="feature-card">Built-in Invoice System</div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Cosmic Sites</h2>
        <p>We empower entrepreneurs with seamless, high-performance online stores.</p>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email: cosmicstrainsofficial@gmail.com</p>
      </section>

      <footer className="footer">
        <p>© 2025 Cosmic Sites. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;