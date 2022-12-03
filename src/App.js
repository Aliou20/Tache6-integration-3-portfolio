
import './App.css';
import Competences from './Components/Competences/Competences';
import Experiances from './Components/Experiences/Experiences';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import Presentation from './Components/Presentation/Presentation';

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Portfolio />
      <Competences />
      <Experiances />
      <Footer />
    </div>
  );
}

export default App;
