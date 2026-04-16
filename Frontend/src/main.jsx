import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './Features/auth/context/auth.context.jsx'
import { SongProvider } from './Features/FaceDetection/context/SongContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
    <SongProvider>
    <App />
    </SongProvider>
  </AuthProvider>
  </BrowserRouter>
)
