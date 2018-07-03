import React, { Component } from 'react'
import '../style/Lift.css'
import LiftResultList from './LiftResultList'
import LiftResultForm from './LiftResultForm'
import { connect } from 'react-redux'
import { addLiftResult } from '../actions'


const mapStateToProps = (state, ownProps) => ({
  results: state.liftResults.filter((result) => (result.liftId == ownProps.lift.id))
})

const mapDispatchToProps = (dispatch) => ({
  addLiftResult: args => dispatch(addLiftResult(args))
})


class Lift extends Component {

  constructor(props) {
    super(props)

    this.state = {
      weight: '',
      expanded: false,
    }
  }

  getMaxWeight() {
    var max = null
    let results = this.props.results;
    for(var i = 0; i < results.length; i++) {
      if(results[i].weight > max) {
        max = results[i].weight
      }
    }
    return max
  }

  toggleExpanded() {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {

    let expandedCell = null;
    if(this.state.expanded) {
      expandedCell = (
        <div className="expanded">
          <LiftResultForm addLiftResult={this.props.addLiftResult} liftId={this.props.lift.id} />
          <LiftResultList results={this.props.results} />
        </div>
      )
    }

    return (
      <div className="Lift">
        <div className="clickable" onClick={ () => {
          this.toggleExpanded()
        }}>
          <div className="name">
            { this.props.lift.name }
          </div>
          <div className="max-weight">
            { this.props.results.length > 0 ? this.getMaxWeight() : null }
          </div>
        </div>

          { expandedCell }

      </div>
    );
  }


}


export default connect(mapStateToProps, mapDispatchToProps)(Lift)