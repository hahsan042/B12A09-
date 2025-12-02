import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './Router/Router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Context/AuthProvider.jsx'
import { Bounce, ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
   <RouterProvider router={router} />
    
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
 </AuthProvider>
  </StrictMode>,
)
