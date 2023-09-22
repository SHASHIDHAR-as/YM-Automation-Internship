import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Attendence from './pages/Attendence.jsx';
import Approval from './pages/Approval.jsx';
import Timesheet from './pages/Timesheet.jsx';
import Project from './pages/Project.jsx';
import ProfileSetting from './pages/ProfileSetting.jsx';
import Payroll from './pages/Payroll';
import Logout from './pages/Logout';
// import Header from './components/Header';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendence" element={<Attendence />} />
          <Route path="/timesheet" element={<Timesheet />} />
          <Route path="/approval" element={<Approval />} />
          <Route path="/project" element={<Project />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/profilesetting" element={<ProfileSetting />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;