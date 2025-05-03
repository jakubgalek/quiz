import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/img/logo.svg" alt="bulb" className="logo-img" />
        <a href="/">
        <h1>TwojaKwalifikacja</h1>
        </a>
      </div>
    </header>
  );
};

export default Header;