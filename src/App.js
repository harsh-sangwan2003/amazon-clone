import './App.css';
import Checkout from './components/checkout/Checkout';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Routes>

          <Route path='/' element={[<Home />]} />

          <Route path='/checkout' element={[<Checkout />]} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
