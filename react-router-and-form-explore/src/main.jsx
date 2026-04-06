import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './component/home/Home.jsx'
import Root from './component/Root/Root.jsx'
import Blog from './component/Blog/Blog.jsx'
import Navbar from './component/Navbar/Navbar.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true, Component:Navbar},
      {
        path:"blog",
        Component:Blog
      }
    ]
  }, 
  {
    path: "about",
    element: <div>Nothing about me!</div>
  },
  {
    path:"app",
    Component:App
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
