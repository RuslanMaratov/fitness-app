import "./App.css";
import Header from "./Header/Header";
import Motivation from "./Motivation/Motivation";
import Footer from "./Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Workout from "./Workout/Workout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="*" element={<Motivation />} />
          <Route path="/workout" element={<Workout />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
