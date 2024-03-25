import './App.scss';

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
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Manga</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Recensioni</a>
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
