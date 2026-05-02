import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Event from './Events/Event'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Event/>
  </StrictMode>,
)
