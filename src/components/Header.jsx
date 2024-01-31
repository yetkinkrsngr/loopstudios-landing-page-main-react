import React, { useEffect } from 'react';
import logo from '../../public/images/logo.svg';

const Header = () => {
  useEffect(() => {
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('nav');

    const handleClick = () => {
      navbar.classList.toggle('open');
      menuBtn.classList.toggle('rotate');
    };

    menuBtn.addEventListener('click', handleClick);

    // Cleanup function
    return () => {
      menuBtn.removeEventListener('click', handleClick);
    };
  }, []); // Boş dependency array, sadece bir kere çalışmasını sağlar

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Loopstudios" />
        </div>

        <nav>
          <div className="nav-logo">
            <img src={logo} alt="" />
          </div>
          <ul>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Careers</button>
            </li>
            <li>
              <button>Events</button>
            </li>
            <li>
              <button>Products</button>
            </li>
            <li>
              <button>Support</button>
            </li>
          </ul>
        </nav>

        <div className="menu-btn">
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
