import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PageNotFound from './Page note Found/PageNotFound';
import AllinOne from './components/inner Componenets/AllinOne';
import Navbar from './components/Navbar';
import MainCart from './components/inner Componenets/MainCart';
import ScrollToTop from './ScrollTop';

function App() {
  return (
    <>
      <Router basename='The_Golden_Bakery'>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='all' element={<AllinOne />} />
          <Route path='cart' element={<MainCart />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
