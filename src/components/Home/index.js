// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'
class Home extends Component {
  state = {cardList: [], isLoading: true}
  componentDidMount() {
    this.getCardsList()
  }
  setTeams = (formattedData, isLoading) => {
    this.setState({
      cardList: formattedData,
      isLoading,
    })
  }

  getCardsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const fetchedData = await response.json()
    const formattedData = fetchedData.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageUrl: team.team_image_url,
    }))
    this.setTeams(formattedData, false)
  }

  renderCardsList = () => {
    const {cardList} = this.state
    return (
      <ul>
        {cardList.map(team => (
          <TeamCard key={team.id} cardDetails={team} />
        ))}
      </ul>
    )
  }
  renderLoadingCardlist = () => (
    <div>
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )
  render() {
    const {isLoading} = this.state
    return (
      <div>
        <div className="bg-container">
          <div className="align">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo"
            />
            <h1>IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoadingCardlist() : this.renderCardsList()}
        </div>
      </div>
    )
  }
}
export default Home
