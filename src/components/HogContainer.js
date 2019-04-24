import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hog from './Hog'
import HogEditForm from './HogEditForm'

// import hogs from '../data/porkers_data'
import { getHogs } from '../actions/hogActions'


class HogContainer extends Component {
  componentDidMount() {
    this.props.getHogs()
  }
  // <HogEditForm />

  render() {
    const hogsWithJogs = this.props.hogs.map(hog => <Hog key={hog.name} hog={hog} />)
    return (
      <div>
        <div className="App-logo">Joggit Hoggit</div>
        <div className="hobbitsContainer">
          {hogsWithJogs}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => console.log(state) || ({ hogs: state.hogs })
const mapDispatchToProps = { getHogs }

export default connect(mapStateToProps, mapDispatchToProps)(HogContainer)
// export default connect(null, mapDispatchToProps)(HogContainer)
