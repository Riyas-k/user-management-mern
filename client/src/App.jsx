import "./App.css";
import AdminHome from "./components/admin/AdminHome";
import AdminLogin from "./components/admin/AdminLogin";
import Home from "./components/user/Home";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import Register from "./components/user/Register";
import { Routes, Route } from "react-router-dom";
import PrivateComponent, { AdminPrivate } from "./components/PrivateComponent";
import AddUser from "./components/admin/AddUser";

function App() {
 
  return (
    <>
      <Routes>
      
        <Route element={<PrivateComponent/>} >

        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        </Route>     

        <Route path="/sign-up" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={<AdminPrivate/>} >
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/add-user" element={<AddUser/>}  />
        </Route>
      </Routes>
    </>
  );
}

export default App;
