import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Foot from './Components/Foot'
import Home from './Pages/Home'
import Result from './Pages/Result'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/result' element={<Result/>}/>
    

    </Routes>
    <Foot/>
    </BrowserRouter>
      
    </>
  )
}

export default App
