import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MajorReqsTester from './MajorReqsTester.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MajorReqsTester />
  </StrictMode>,
)
