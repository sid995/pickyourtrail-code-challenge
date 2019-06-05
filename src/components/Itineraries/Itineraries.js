import React, { Component } from 'react'
import './style.css'
import StickyWrapper from './StickyWrapper'
import _ from 'lodash'
import ItineraryItems from './ItineraryItems'

// const Itineraries = props => {
//   const { itineraries } = props
//   console.log(itineraries)
//   const newData = _.groupBy(itineraries, function(o) {
//     return o.text.toUpperCase().charAt(0)
//   })

//   const newKeys = Object.keys(newData)
//   console.log(newKeys)

//   return (
//     <div className="common-list">
//       <h5 className="sitemap-filter-title">{`Showing all ${props.itineraries.length} pages`}</h5>
//       <StickyWrapper links={newKeys} />
//       <ItineraryItems data={newData} />
//     </div>
//   )
// }

class Itineraries extends Component {
  render() {
    const { itineraries } = this.props
    const newData = _.groupBy(itineraries, function(o) {
      return o.text.toUpperCase().charAt(0)
    })
    const newKeys = Object.keys(newData)

    return (
      <div className="common-list">
        <h5 className="sitemap-filter-title">{`Showing all ${
          this.props.itineraries.length
        } pages`}</h5>
        <StickyWrapper links={newKeys} />
        <ItineraryItems itineraries={itineraries} />
      </div>
    )
  }
}

export default Itineraries
