// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
const TeamCard = props => {
  const {cardDetails} = props
  const {id, name, teamImageUrl} = cardDetails
  return (
    <Link exact to={`/team-matches/${id}`}>
      <li className="list-items">
        <div className="align">
          <img src={teamImageUrl} alt={name} className="image" />
          <h1 className="heading">{name}</h1>
        </div>
      </li>
    </Link>
  )
}
export default TeamCard
