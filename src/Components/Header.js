/*import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useGlobalContext } from '../context';
import MenuToggleButton from '../MenuToggleButton';
import '../index.css'; // Assuming your CSS file is named Header.css

const Header = () => {
  const { isMenuOpen, authStatus } = useGlobalContext();

  console.log('authStatus:', authStatus);

  return (
    <header className="header">
      <Link to="/" id="top" className="logo">
        Lumin
      </Link>
      <nav className={isMenuOpen ? 'menu-open' : 'menu-close'}>
        <Link className="nav-link" to="/aboutus">
          About Us
        </Link>
        <HashLink className="nav-link" smooth to="/#product">
          Product
        </HashLink>
        <HashLink className="nav-link" smooth to="/#courses">
          Our Courses
        </HashLink>
        <HashLink className="nav-link" smooth to="/#contactus">
          Contact Us
        </HashLink>
      </nav>
      <div className="login">
        {authStatus ? (
          <Link to="/userprofilepage" className="nav-link text-xl">
            User Profile
          </Link>
        ) : (
          <Link to="/login" className="nav-link login-but">
            Login
          </Link>
        )}
      </div>
      {window.innerWidth <= 1036 && <MenuToggleButton />}
    </header>
  );
};

export default Header;*/

import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useGlobalContext } from '../context';
import MenuToggleButton from '../MenuToggleButton';
import '../index.css';

const Header = () => {
  const { isMenuOpen, authStatus } = useGlobalContext();

  return (
    <header className="orig-header">
      <Link to="/" id="top" className="orig-logo">
        Lumin
      </Link>
      <nav className={isMenuOpen ? 'orig-nav orig-nav--open' : 'orig-nav'}>
        <Link className="orig-nav-link" to="/aboutus">
          About Us
        </Link>
        <HashLink className="orig-nav-link" smooth to="/#product">
          Product
        </HashLink>
        <HashLink className="orig-nav-link" smooth to="/#courses">
          Our Courses
        </HashLink>
        <HashLink className="orig-nav-link" smooth to="/#contactus">
          Contact Us
        </HashLink>
      </nav>
      <div>
        {authStatus ? (
          <Link to="/userprofilepage" className="orig-login-btn">
            User Profile
          </Link>
        ) : (
          <Link to="/login" className="orig-login-btn">
            Login
          </Link>
        )}
      </div>
      {window.innerWidth <= 1036 && <MenuToggleButton />}
    </header>
  );
};

export default Header;
