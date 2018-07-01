import React, { Component } from 'react'
import LiftResult from './LiftResult'


export default class LiftResultList extends Component {

  render() {
    return (
      <div className="LiftResultList">
        {this.props.results.map((result, index) => (
          <LiftResult result={result} key={index} />
        ))}
      </div>
    )
  }

}