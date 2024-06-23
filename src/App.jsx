import React from 'react'

// import styles
import './index.css'

//import react router dom
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// import pages
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

//import components
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

const App = () => {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product/:id' element={<ProductDetails/>} />
    </Routes>
    <Sidebar/>
    <Footer/>
   </Router>
  )
}

export default App