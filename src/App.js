// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home-component';
import About from './components/About-component';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
