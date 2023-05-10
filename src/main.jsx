import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Route.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  
     <div className='max-w-6xl mx-auto'>
      <RouterProvider router={router} />
     </div>
  
)
