import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import  {NotificationProvider} from "./context/NotificationContext.jsx"
import { AuthContextProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <NotificationProvider>
    <AuthContextProvider>
     <App/>
    </AuthContextProvider>
  </NotificationProvider>
 
  </StrictMode>
)
