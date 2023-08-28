import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import AddUser from './Component/AddUser';
import UpdateUser from './Component/UpdateUser';
import UserListing from './Component/UserListing';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
      <BrowserRouter>
      <Link to={'/'}>Home</Link><br/>
      <Link to={'/user'}>Users</Link>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user' element={<UserListing></UserListing>}></Route>
        <Route path='/user/add' element={<AddUser></AddUser>}></Route>
        <Route path='/user/edit' element={<UpdateUser></UpdateUser>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
