import Login from './components/Login'
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Signiup from './components/Signiup';
import Details from './components/Details';
import ForgetPassword from './components/ForgetPassword';
import OTP from './components/OTP';

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Details />}/>
        <Route path='/forget' element={<ForgetPassword />}/>
        <Route path='/otp' element={<OTP/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signiup/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
