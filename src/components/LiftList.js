import React, { Component } from 'react'
import '../style/LiftList.css'

import Lift from './Lift'

export default class LiftList extends Component {

  render() {
    return (
      <div className="LiftList">
        {this.props.lifts.map((lift, index) => (
          <Lift lift={lift} key={index} />
        ))}
      </div>
    )
  }
}