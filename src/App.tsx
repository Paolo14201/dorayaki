import './App.scss';
import { useState } from "react";
import ReviewsIcon from '@mui/icons-material/Reviews';
import HomeIcon from "@mui/icons-material/Home";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";



function App() {
  return (
    <>
    <header>
    <nav className="navbar navbar-expand-lg bg-red navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Progetto</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><HomeIcon>Filled</HomeIcon>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><ReviewsIcon>Filled</ReviewsIcon>Recensioni</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><MarkAsUnreadIcon>Filled</MarkAsUnreadIcon>Contatti</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
<div className ="container-titolo">
  <h2> Web app personale</h2>
  <p className="paragrafo">Prova Testo</p>
</div>
</>
  );
}

export default App;
