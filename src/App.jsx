import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import PlayerDetails from './pages/PlayerDetails'
import Navbar from './components/Navbar'
import NewPlayer from './pages/NewPlayer'
import UpdatePlayer from './pages/UpdatePlayer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/player/:playerId' element={<PlayerDetails />} />
        <Route path='/player/new' element={<NewPlayer />} />
        <Route path='/player/:playerId/update' element={<UpdatePlayer />} />

        <Route path='*' element={<h1>404 - Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
