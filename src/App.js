import Start from './Start'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Navbar'
import NotFound from './NotFound';
import Users from './StateLifting/Users';
import MyUsers from './MyUsers';
import User1 from './User1';
import User2 from './User2';
import Data from './Fetch/Data';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate to="/" />} />
        <Route path='/start' element={<Start />} />
        <Route path='/user_info' element={<Users />} />
        <Route path='/data' element={<Data />} />

        
        {/* CHILD ROUTING */}
        <Route path='/myUsers'>
          <Route index element={<MyUsers />}></Route>
          <Route path='user1' element={<User1 />}></Route>
          <Route path='user2' element={<User2 />}></Route>
        </Route>

        {/* WILDCARD ROUTING */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
