
import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import Login from './components/Login';
function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <div>Home</div> },
        { path: '/about', element: <div>About</div> },
        { path: '/contact', element: <div>Contact</div> },
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
