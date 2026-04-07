import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './component/home/Home.jsx'
import Root from './component/Root/Root.jsx'
import Blog from './component/Blog/Blog.jsx'
import Navbar from './component/Navbar/Navbar.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import User from './component/User/User.jsx'
import UserDetails from './component/User/UserDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User />
      },
      {
        path: "user/:userID",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        element: <UserDetails />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
