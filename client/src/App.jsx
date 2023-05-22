import './App.css'
import AdminHome from './components/admin/AdminHome';
import AdminLogin from './components/admin/AdminLogin';
import Home from './components/user/Home';
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import Register from './components/user/Register';
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route  path='/sign-up' element={ <Register />}/>
      <Route  path='/login' element={ <Login />}/>
      <Route  path='/' element={ <Home />}/>
      <Route  path='/profile' element={ <Profile />}/>
      <Route  path='/admin/login' element={<AdminLogin />}/>
      <Route  path='/admin' element={<AdminHome />}/>

    </Routes>
    
    </>
  )
}

export default App
