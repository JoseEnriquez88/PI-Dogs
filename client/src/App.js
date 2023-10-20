import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "./redux/actions";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Dogs from "./components/Dogs/Dogs.jsx";
import Detail from "./components/Detail/Detail";
import Footer from "./components/Footer/Footer.jsx";
import Nav from "./components/Nav/Nav";

function App() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.breeds);

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Dogs dogs={dogs} />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
