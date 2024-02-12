import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import "./App.css"
import PageNotFoundPage from './pages/PageNotFoundPage'
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='*' element={<PageNotFoundPage/>} />
      </Routes>
      
    </div>
  )
}

export default App
