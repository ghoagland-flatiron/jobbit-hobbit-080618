import React from 'react';
import Hobbit from './Hobbit';
import EditForm from './EditForm';

import { connect } from 'react-redux'
// import hobbits from '../data/hobbit_data'
import { getHobbits } from '../actions/hobbitActions'


class HobbitContainer extends React.Component {

  componentDidMount() {
    this.props.getHobbits()

    // this.props.loadHobbits(hobbits)
  }

  render() {
    const hobsWithJobs = this.props.hobbits.map(hobbit => {
      return <Hobbit key={hobbit.id} hobbit={hobbit} dog='dog' />;
    });
    return (
      <div>
        <div className="App-logo">Jobbit</div>
        <EditForm />
        <div className="hobbitsContainer">
          {hobsWithJobs}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('CURRENT STATE: ', state)
  return {
    hobbits: state.hobbits
  }
}

const mapDispatchToProps = (dispatch) => ({
  getHobbits: () => dispatch(getHobbits())
})


export default connect(mapStateToProps, mapDispatchToProps)(HobbitContainer)
