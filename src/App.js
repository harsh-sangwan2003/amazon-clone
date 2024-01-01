import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>

          <Route path='/' element={[<Header/>,<Home/>]}/>

          <Route path='/checkout' element={[<Header/>]}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
