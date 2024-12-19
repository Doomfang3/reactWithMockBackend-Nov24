import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>All the players</Link>
        </li>
        <li>
          <Link to='/player/new'>Add One Player</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
