// import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import { router } from './router/router.jsx';
import AuthProvider from './contexts/AuthContext/AuthProvider.jsx';
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  
    <div className='font-urbanist max-w-7xl mx-auto'>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="top-center" />
      </AuthProvider>
    </div>
  
)
