import React from 'react';
import Hobbit from './Hobbit';
import HobbitEditForm from './HobbitEditForm';

import { connect } from 'react-redux'

class HobbitContainer extends React.Component {

  render() {
    const hobsWithJobs = this.props.hobbits.map(hobbit => {
      return <Hobbit key={hobbit.id} hobbit={hobbit} dog='dog' />;
    });
    return (
      <div>
        <div className="App-logo">Jobbit Hobbit</div>
        <HobbitEditForm />
        <div className="hobbitsContainer">
          {hobsWithJobs}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hobbits: state.hobbits
  }
}


export default connect(mapStateToProps)(HobbitContainer)
