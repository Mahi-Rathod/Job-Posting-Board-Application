import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import OtpVerification from './components/OtpVerification';
import Home from './Pages/Home';
import CreateInterview from './Pages/CreateInterview';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path='/' element={<Signup/>} />
          <Route path='/otp-verification' element={<OtpVerification/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/create-interview' element={<CreateInterview />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
