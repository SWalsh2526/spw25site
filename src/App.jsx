import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './elements/navbar.jsx';
import MajorReqsTester from './pages/MajorReqsTester.jsx'
import Homepage from './pages/Homepage.jsx';
import WorkProjects from './pages/WorkProjects.jsx';
import SchoolProjects from './pages/SchoolProjects.jsx';
import FunProjects from './pages/FunProjects.jsx';
import { Background } from './elements/background.jsx';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<StrictMode>
    <BrowserRouter>
      <Background>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/WorkProjects" element={<WorkProjects />} />
          <Route path="/SchoolProjects" element={<SchoolProjects />} />
            <Route path="/MajorReqsTester" element={<MajorReqsTester />} />
          <Route path="/FunProjects" element={<FunProjects />} />
        </Routes> 
      </Background>
    </BrowserRouter>
  </StrictMode>,
)
