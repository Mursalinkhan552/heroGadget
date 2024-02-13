
import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import { createContext, useState } from 'react'


export const ProductContext = createContext([]);
export const CartContext = createContext([]);

function App() {
  const { cartArray, products } = useLoaderData();
  const [cart, setCart] = useState(cartArray);
  return (

    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header></Header>
        <div className='min-h-[calc(100vh-137px)]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </CartContext.Provider>
    </ProductContext.Provider>

  )
}

export default App
