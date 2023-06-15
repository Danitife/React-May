// import logo from './logo.svg';
import './App.css';
// import About from './About';
// import Users from './components/StateLifting/Users';
import Information from './Information'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import UseEffect from './components/UseEffect/UseEffect';
import HttpFetch from './components/HTTPMethods/HttpFetch';
import AddPost from './components/HTTPMethods/AddPost';
import OnePost from './components/HTTPMethods/OnePost';
import Signup from './components/CustomHooks/Signup';
import SignUser from './components/Formik/SignUser';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate to="/information" />} />
        <Route path='/information' element={<Information />} />
        <Route path='/morning' element={<UseEffect />} />
        <Route path='/http' element={<HttpFetch />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/addPost' element={<AddPost />} />
        <Route path='/register' element={<SignUser />} />
        <Route path='/onepost/:id' element={<OnePost />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      {/* <About></About> */}
      {/* <About /> */}
      {/* < Users /> */}
    </div>
  );
}

export default App;
