import { meta } from '@eslint/js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = ({ player, isUpdate = false }) => {
  const navigate = useNavigate()

  const [firstname, setFirstname] = useState(player?.firstname || '')

  const handleSubmit = async event => {
    event.preventDefault()
    const newPlayer = { firstname }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/players${isUpdate ? `/${player.id}` : ''}`,
        {
          method: isUpdate ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPlayer),
        }
      )
      if (response.ok) {
        const newPlayerData = await response.json()
        navigate(`/player/${newPlayerData.id}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Firstname
        <input value={firstname} onChange={event => setFirstname(event.target.value)} />
      </label>
      <button type='submit'>submit</button>
    </form>
  )
}

export default Form
