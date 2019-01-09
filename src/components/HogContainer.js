import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Hog from './Hog'
import HogEditForm from './HogEditForm'

import hogs from '../data/porkers_data'

class HogContainer extends Component {
  render() {
    const hogsWithJogs = hogs.map(hog => <Hog key={hog.name} hog={hog} />)
    return (
      <div>
        <div className="App-logo">Joggit Hoggit</div>
        <HogEditForm />
        <div className="hobbitsContainer">
          {hogsWithJogs}
        </div>
      </div>
    );
  }
}

export default HogContainer
