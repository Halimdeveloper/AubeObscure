import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './reset.css'
import { BrowserRouter } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </BrowserRouter>
)
