import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLift } from '../actions'
import LiftForm from './LiftForm'
import LiftList from './LiftList'


const mapStateToProps = (state) => ({
  lifts: state.lifts
})

const mapDispatchToProps = (dispatch) => ({
  addLift: args => dispatch(addLift(args))
})


class LiftListContainer extends Component {

  render() {
    return (
      <div className="LiftListContainer">
        <LiftForm addLift={this.props.addLift} />
        <LiftList lifts={this.props.lifts} />
      </div>
    )
  }


}

export default connect(mapStateToProps, mapDispatchToProps)(LiftListContainer);