import './styles/App.css'
import Login from './pages/Login'
import Navbar from './Layout/Navbar'
import {Routes, Route } from 'react-router'

function App() {


  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
      {/* <Login/> */}
      <Navbar/>
    </div>
  )
}

export default App





