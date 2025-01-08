import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Form from '../components/Form'

const UpdatePlayer = () => {
  const { playerId } = useParams()

  const [firstname, setFirstname] = useState('')

  async function fetchSinglePlayer() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/players/${playerId}`)
      if (response.ok) {
        const singlePlayerData = await response.json()
        setFirstname(singlePlayerData.firstname)
      }
    } catch (error) {
      console.log(error)
    }
  }
  /* set when it done */

  useEffect(() => {
    fetchSinglePlayer()
  }, [playerId])

  return firstname ? <Form player={{ firstname, id: playerId }} isUpdate /> : <h2>Loading...</h2>
}

export default UpdatePlayer
