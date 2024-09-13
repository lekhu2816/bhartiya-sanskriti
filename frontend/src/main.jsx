import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './storeContext/storeContext.jsx'
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreContextProvider>
  <BrowserRouter>
  <React.StrictMode>
    <App />
    <ToastContainer/>
  </React.StrictMode>
  </BrowserRouter>
  </StoreContextProvider>,
)
