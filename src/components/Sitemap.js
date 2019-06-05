import React, { Component } from 'react'
import './common.css'
import Header from './Header/Header'
import SampleData from '../data/sample.json'
import Destinations from './Destinations/Destinations'
import Vacations from './Vacations/Vacations'
import Itineraries from './Itineraries/Itineraries'

export class Sitemap extends Component {
  state = {
    destinations: [],
    vacations: [],
    itineraries: []
  }

  componentDidMount() {
    const { destinations, vacations, itineraries } = SampleData
    this.setState({
      destinations,
      vacations,
      itineraries
    })
  }

  render() {
    // console.log(this.state.itineraries)
    return (
      <div className="container" style={{ padding: '30px' }}>
        <div className="row">
          <div className="col-xs-12">
            <Header />
            <Destinations destinations={this.state.destinations} />
            <Vacations vacations={this.state.vacations} />
            <Itineraries itineraries={this.state.itineraries} />
          </div>
        </div>
      </div>
    )
  }
}

export default Sitemap
