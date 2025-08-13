import React from 'react'
import Title from './Components/Title/Title'
import ProductList from './Components/ProductList/ProductList'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import { Route, Routes } from 'react-router'
import CreateProductScreen from './Screens/CreateProductScreen/CreateProductScreen'


function App() {



  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/create' element={<CreateProductScreen/>}/>
      </Routes>

    </div>
  )
}

export default App
