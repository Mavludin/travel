import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { TopCarousel } from './components/TopCarousel/TopCarousel';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <TopCarousel />
    </div>
  );
}

export default App;
