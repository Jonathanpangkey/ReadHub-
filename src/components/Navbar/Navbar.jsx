import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id='navbar'>
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to='/' className='navbar-brand flex'>
            <img className="nav-logo" src={logoImg} alt='site logo' />
            <span className='text-uppercase fw-7 fs-24 ls-1'>ReadHub</span>
          </Link>
          <button type='button' className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='book' className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                Home
              </Link>
            </li>
            <br />
            <li className='nav-item'>
              <Link to='about' className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                about
              </Link>
            </li>
            {/* <div class='nav-item'>
              <button class='dropbtn nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Dropdown</button>
              <div class='dropdown-content'>
                <a href='/' class='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                  Link 1
                </a>
                <a href='/' class='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                  Link 2
                </a>
                <a href='/' class='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                  Link 3
                </a>
              </div>
            </div> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
