import './App.css';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Footer from './components/Footer/Footer.jsx';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
