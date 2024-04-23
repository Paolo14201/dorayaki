import React from 'react';
import ReviewsIcon from '@mui/icons-material/Reviews';
import HomeIcon from "@mui/icons-material/Home";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

const HeaderComponent = () => {
  const logo = './assets/images/logo.png';
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-red navbar-dark">
        <div className="container-fluid">
        <Link to='/' className="navbar-brand">
          <img src={logo} className="icona-Dorayaki" alt="Dorayaki" />
            Dorayaki
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className='nav-link'>
                  <HomeIcon>Filled</HomeIcon>Home
                  </Link>
              </li>
              <li className="nav-item">
                <Link to="/anime" className="nav-link">
                  <ReviewsIcon>Filled</ReviewsIcon>Anime List
                  </Link>
              </li>
              <li className="nav-item">
                <Link to="/registrazione" className="nav-link">
                  <PersonIcon>Filled</PersonIcon>Registrazione
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contatti" className="nav-link">
                  <MarkAsUnreadIcon>Filled</MarkAsUnreadIcon>Contatti
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default HeaderComponent;