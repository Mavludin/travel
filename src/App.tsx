import 'antd/dist/reset.css';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useRef, useState } from 'react';
import './App.css';
import { Booking } from './components/Booking/Booking';
import { CustomMap } from './components/CustomMap/CustomMap';
import { Destinations } from './components/Destinations/Destinations';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Testimonials } from './components/Testimonials/Testimonials';
import { TopCarousel } from './components/TopCarousel/TopCarousel';
import { About } from './pages/About/About';

function App() {

  const [selectedItem, setSelectedItem] = useState();

  const bookingRef = useRef<HTMLDivElement>(null);

  const scrollToBooking = () => {
    if (!bookingRef.current) return;

    bookingRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="App">
      <Header />
      <NavBar />
      <TopCarousel scrollToBooking={scrollToBooking} />
      <Booking ref={bookingRef} />
      <CustomMap />
      <Destinations />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
