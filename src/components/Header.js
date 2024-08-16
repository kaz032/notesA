import React, { useState } from 'react';
import Login from './Login';

function Header() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <header>
      <div className="container">
        <nav>
          <a href="/" className="logo">QuickNotes<span>.AI</span></a>
          <a href="#how-it-works">How It Works</a>
          <a href="#ai-integration">AI Integration</a>
          <button className="button" onClick={() => setShowLogin(true)}>Sign Up / Login</button>
        </nav>
      </div>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </header>
  );
}

export default Header;