import 'antd/dist/reset.css';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './App.css';
import { Booking } from './components/Booking/Booking';
import { Destinations } from './components/Destinations/Destinations';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Testimonials } from './components/Testimonials/Testimonials';
import { TopCarousel } from './components/TopCarousel/TopCarousel';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <TopCarousel />
      <Booking />
      <Destinations />
      <Testimonials />
    </div>
  );
}

export default App;
