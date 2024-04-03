import NavBar from './components/NavBar'
import Contenedor from './components/Contenedor'
import CardList from './components/CardList'
import AppRouter from './routes/AppRouter'
import './App.css'
import SearchBar from './components/SearchBar'
import {Toaster} from 'react-hot-toast'

function App() {

  return (
    <>
      <AppRouter/>
      <Toaster/>
    </>
  )
}

export default App
