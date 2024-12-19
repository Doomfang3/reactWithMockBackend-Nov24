import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  // A way to store our players
  const [players, setPlayers] = useState([])
  // A way to get our players
  async function fetchPlayers() {
    try {
      const response = await fetch('http://localhost:4000/players')
      if (response.ok) {
        const playersData = await response.json()
        setPlayers(playersData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Fetch the players at the right time

  useEffect(() => {
    fetchPlayers()
  }, [])

  return (
    <div>
      <h1>Homepage</h1>
      {/* List of players */}
      <ul>
        {players.map(player => (
          <li key={player.id}>
            <Link to={`/player/${player.id}`}>
              <h2>{player.firstname}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Homepage
