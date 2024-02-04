
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

function App() {
  return (
    <>
      <Header></Header>
      <div className='min-h-[calc(100vh-137px)]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
