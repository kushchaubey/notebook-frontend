
import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Details from '../pages/Details';
function App() {
 

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home/> },
        { path: '/about', element: <div>About</div> },
        { path: '/contact', element: <div>Contact</div> },
        { path: '/details/:id', element: <Details/> },
        { path: '/login', element: <Login/> },
      ],
    },{
       path: '/admin',
      element:<div>Admin</div>,
    }
  ]);
  return <RouterProvider router={routes}/>

}

export default App
