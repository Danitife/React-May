// import logo from './logo.svg';
import './App.css';
import About from './About';
import Users from './components/StateLifting/Users';
import Information from './Information'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/information' element={<Information />} />
      </Routes>
      {/* <About></About> */}
      {/* <About /> */}
      {/* < Users /> */}
    </div>
  );
}

export default App;
