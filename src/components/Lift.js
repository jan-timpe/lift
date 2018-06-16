import React, { Component } from 'react';
import '../style/Lift.css';

export default class Lift extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: props.lift.name,
      max: props.lift.max,
      history: props.lift.history,
      addResultCallback: props.addResultCallback,
      liftIndex: props.liftIndex,
      weight: null,
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      name: props.lift.name,
      max: props.lift.max,
      history: props.lift.history,
      addResultCallback: props.addResultCallback,
      liftIndex: props.liftIndex
    })

    console.log(this.state)
  }

  toggleExpanded() {
    this.setState({ expanded: !this.state.expanded })
  }

  addLiftResult() {
    this.state.addResultCallback(this.state.liftIndex, this.state.weight)
    this.setState({ weight: '' })
  }

  render() {

    let expandedCell = null;
    if(this.state.expanded) {
      expandedCell = (
        <div className="expanded">

          <form onSubmit={ (event) => {
            event.preventDefault()
            this.addLiftResult()
          }}>

            <div className="input-wrapper">
              <label htmlFor="weight">Add result:</label>
              <input type="number" name="weight" id="weight" value={ this.state.weight } onChange={ (evt) => {
                this.setState({ weight: evt.target.value })
              }}/>
            </div>
            <div className="input-wrapper">
              <input type="submit" value="Add" className="button"/>
            </div>
          </form>


          { this.state.history.map( (result, i) => {
            return (
              <div className="result" key={ i }>
                { result.weight } on { result.date }
              </div>
            )
          })}
        </div>
      )
    }

    return (
      <div className="lift">
        <div onClick={ () => {
          this.toggleExpanded()
        }}>
          <div className="name">
            { this.state.name }
          </div>
          <div className="max-weight">
            { this.state.max ? this.state.max.weight : null }
          </div>
        </div>

          { expandedCell }

      </div>
    );
  }



}