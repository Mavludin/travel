import 'antd/dist/reset.css';
import './App.css';
import { Booking } from './components/Booking/Booking';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { TopCarousel } from './components/TopCarousel/TopCarousel';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <TopCarousel />
      <Booking />
    </div>
  );
}

export default App;
