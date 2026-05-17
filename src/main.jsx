import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '../themeContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <div className='min-h-screen min-w-screen'>
    <ThemeProvider>
       <App />
    </ThemeProvider>
     
  </div>
  </BrowserRouter>
)
