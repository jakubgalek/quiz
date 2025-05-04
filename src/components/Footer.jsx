import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Designed by{' '}
        <a 
          href="https://github.com/NataliaSunday" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="Natalie"
        >
          Natalia Niedziela
          <img src="/quiz/img/Octocat.png" alt="GitHub" />
        </a>
        Created by{' '}
        <a 
          href="https://github.com/JakubGalek" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="Jacob"
        >
          Jakub Gałek
          <img src="/quiz/img/Octocat.png" alt="GitHub" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;