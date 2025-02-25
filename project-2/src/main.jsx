import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navigation from './components/Navigation/Navigation.jsx'
import ContactHeader from './components/ContactHeader/ContactHeader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)