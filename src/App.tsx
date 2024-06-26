import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';


import Home from './pages/Home';
import Recipes from './pages/Recipes';
import DetailRecipe from './pages/DetailRecipe';
import RegistrationUser from './pages/RegistrationUser';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/anime" element={<Recipes />} />
        <Route path="/dettaglio/:title/:id" element={<DetailRecipe />} />
      <Route path= "/registrazione" element={<RegistrationUser />} />
      </Routes>

    </Router>
  );
}


export default App;
