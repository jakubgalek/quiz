import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/quiz/img/logo.svg" alt="bulb" className="logo-img" />
        <a href="/quiz">
        <h1>TwojaKwalifikacja</h1>
        </a>
      </div>
    </header>
  );
};

export default Header;