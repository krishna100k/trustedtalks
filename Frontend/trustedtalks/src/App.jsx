import './App.css'
import Chats from './Components/Chats/Chats';
import Signup from "./Components/Signup/Signup"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from "axios"
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    
    axios.get("https://trustedtalks.onrender.com/")
    .then((response)=>console.log(response.data))
    .then((err)=>console.log(err))
  }, [])

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup action="login" button="Login" sub="Signup" link = ""/>} />
      <Route path="/signup" element={<Signup action="signup" button="Signup" sub="Login" />} />
      <Route path="/login" element={<Signup action="login" button="Login" sub="Signup" link = ""/>} />
      <Route path='/chats' element={<Chats />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
