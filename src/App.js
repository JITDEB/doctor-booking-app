import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DoctorPage from './pages/DoctorPage';
import BookAppointment from './pages/BookAppointment';
import SomeOtherPage from './pages/SomeOtherPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:id" element={<DoctorPage />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/other" element={<SomeOtherPage />} />
      </Routes>
    </Router>
  );
}

export default App;