import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { WorkoutsContextProvider } from './context/Workout'
import { AuthContextProvider } from './context/Auth.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
  </AuthContextProvider>
)
