import './App.css'
import Chats from './Components/Chats/Chats';
import Signup from "./Components/Signup/Signup"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


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
