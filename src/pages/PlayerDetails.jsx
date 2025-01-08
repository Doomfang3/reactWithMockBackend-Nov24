import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const PlayerDetails = () => {
  const { playerId } = useParams()
  const navigate = useNavigate()

  /* Store the player */
  const [player, setPlayer] = useState({})

  /* fetch the PlayerDetails */
  async function fetchSinglePlayer() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/players/${playerId}`)
      if (response.ok) {
        const singlePlayerData = await response.json()
        setPlayer(singlePlayerData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function deletePlayer() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/players/${playerId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  /* set when it done */

  useEffect(() => {
    fetchSinglePlayer()
  }, [playerId])

  return (
    <div>
      <h1>Details about the player</h1>
      <h2>{player.detail}</h2>
      <h2>{player.firstname}</h2>
      <ul>
        {player.hobbies?.map(hobby => (
          <li>{hobby}</li>
        ))}
      </ul>
      <Link to={`/player/${playerId}/update`}>Update</Link>
      <button type='button' onClick={deletePlayer}>
        Delete
      </button>
    </div>
  )
}

export default PlayerDetails
