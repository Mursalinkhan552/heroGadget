import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './components/Home/Home'
import About from './components/About/About'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/Cart'
import productsAndCartData from './loader/getCart&ProductData'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: productsAndCartData,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <Shop></Shop>,
        loader: () => fetch('products.json')
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
        loader: productsAndCartData
      },
      {
        path: '/about',
        element: <About></About>
      },


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
