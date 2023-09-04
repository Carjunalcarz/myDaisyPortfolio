import { useState } from 'react'
import Navbar from './components/header/Navbar'
import Home from './components/Pages/1.homepage/Home'
import Footer from './components/footer/Footer'
import Carousel from './components/Pages/1.homepage/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
