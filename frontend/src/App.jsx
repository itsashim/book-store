import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    </AuthProvider>
  )
}

export default App
