import React from 'react';
import './Style.css';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="h1" onClick={() => scrollToSection('Portifolio')}>Portfólio</h1>
        <ul className="ul">
        <li className='li' onClick={() => scrollToSection('JavaScript')}>JavaScript</li>
          <li className='li' onClick={() => scrollToSection('TypeScript')}>TypeScript</li>
          <li className='li' onClick={() => scrollToSection('React')}>React</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
