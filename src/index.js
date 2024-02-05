import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Layout from "./components/Layout"
import ErrorPage from "./pages/ErrorPage"
import PostDetails from "./pages/PostDetails"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import UserProfile from "./pages/UserProfile"
import Authors from "./pages/Author"
import CreatePost from "./pages/CreatePost"
import CategoryPosts from "./pages/CategoryPosts"
import AuthorPost from "./pages/AuthorPost"
import Dashboard from "./pages/DashBoard"
import Logout from "./pages/Logout"
import EditPost from "./pages/EditPost"
import DeletePost from "./pages/DeletePost"



const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true ,element:<Home/>},
      {path:"post/:id" ,element:<PostDetails/>},
      {path:"register" ,element:<Register/>},
      {path:"login" ,element:<Login/>},
      {path:"profile/:id" ,element:<UserProfile/>},
      {path:"authors" ,element:<Authors/>},
      {path:"create" ,element:<CreatePost/>},
      {path:"post/categories/:category" ,element:<CategoryPosts/>},
      {path:"post/users/:id" ,element:<AuthorPost/>},
      {path:"mypost/:id" ,element:<Dashboard/>},
      {path:"post/:id/edit" ,element:<EditPost/>},
      {path:"post/:id/Delete" ,element:<DeletePost/>},
      {path:"logout" ,element:<Logout/>}
    ]



  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
