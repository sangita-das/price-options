import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Users from './Components/Users/Users'
import UserDetails from './Components/UserDetails/UserDetails'
import Posts from './Components/Posts/Posts'
import PostDetails from './Components/PostDetails/PostDetails'
import ErrorPage from './Components/ErrorPage/ErrorPage'



const router = createBrowserRouter([
  { 
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { 
        path: '/about',
        element:<About></About>
      },
      { 
        path:'/contact',
        element:<Contact></Contact>
      },
      { 
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.org/users'),
        element:<Users></Users>
      },
      { 
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.org/users/${params.userId}`),
        element: <UserDetails/>
      },
      { 
        path: '/posts',
        loader: ()=> fetch('https://jsonplaceholder.org/posts'),
        element: <Posts></Posts>
      },
      { 
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.org/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router = {router}></RouterProvider>
   <App></App>
  </React.StrictMode>,
)
