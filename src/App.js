import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/"  Component={Home }> </Route>
        <Route path="/about" Component={About}></Route>
      </Routes>
    </div>
  );
}

export default App;
