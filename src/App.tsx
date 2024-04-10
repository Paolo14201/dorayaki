import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import DetailRecipe from './pages/DetailRecipe';

import Home from './pages/Home';
import Recipes from './pages/Recipes';


function App() {
  return (
    <Router>
     <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/anime list" element={<Recipes />}/>
        <Route path="/dettaglio" element= {<DetailRecipe />}/>
</Routes>
</Router>
  );
}


export default App;
