import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Route.jsx';
import AuthProvider from './provider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  
     <div className='max-w-6xl mx-auto'>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
     </div>
  
)
