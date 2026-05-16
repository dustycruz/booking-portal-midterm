import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import StatusContainer from './types/StatusContainer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StatusContainer />
  </StrictMode>,
)
