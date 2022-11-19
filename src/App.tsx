import "antd/dist/reset.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useState } from "react";
import "./App.css";
import { AppRoutes } from "./AppRoutes";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <div className="App">
      <Header />
      <NavBar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
