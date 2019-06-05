import React, { Component } from 'react'
import './common.css'
import Header from './Header/Header'
import SampleData from '../data/sample.json'
import Destinations from './Destinations/Destinations'
import Vacations from './Vacations/Vacations'

export class Sitemap extends Component {
  state = {
    destinations: [],
    vacations: [],
    itineraries: []
  }

  async componentDidMount() {
    const { destinations, vacations, itineraries } = await SampleData
    this.setState({
      destinations,
      vacations,
      itineraries
    })
    // console.log(this.state)
  }

  render() {
    return (
      <div className="container" style={{ padding: '0 30px' }}>
        <div className="row">
          <Header />
          <Destinations destinations={this.state.destinations} />
          <Vacations vacations={this.state.vacations} />
        </div>
      </div>
    )
  }
}

export default Sitemap
