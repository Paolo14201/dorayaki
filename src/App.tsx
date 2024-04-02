import './App.scss';
import styled from 'styled-components';
import HeaderComponent from "./components/HeaderComponent";
import CarouselSlider from './components/CarouselSlider';



function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <CarouselSlider></CarouselSlider>
      <div className="container-titolo">
        <h2> Web app personale</h2>
        <p className="paragrafo">Prova Testo</p>
      </div>
    </>
  );
}
/* qua andranno inseriti gli event on click usando il codice:
<button className = 'btn btn-primary'> Nome del bottone </button>
*/

export default App;
