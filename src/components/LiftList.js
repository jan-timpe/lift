import React, { Component } from 'react'
import '../style/LiftList.css'

import Lift from './Lift'
import { connect } from 'react-redux'
import { addLift } from './actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addLift: args => dispatch(addLift(args))
  }
}

const mapStateToProps = (state) => {
  return {
    lifts: state.lifts
  }
}


class LiftList extends Component {
  render() {
    return (
      <div className="LiftList">
        {this.props.map((lift, index) => (
          <Lift lift={lift} liftIndex={index} id={lift.id} key={index} />
        ))}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiftList);
