import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Products from './layouts/Products'
import Rootlayouts from './layouts/Rootlayouts'
import Verror from './layouts/Verror'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Rootlayouts/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/pro' element={<Products/>}/>
          <Route path='*' element={<Verror/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
