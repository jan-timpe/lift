import React, { Component } from 'react'


export default class LiftForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      liftName: ''
    }
  }


  render() {
    return (
      <div class="LiftForm">

        <form onSubmit={ (event) => {
          event.preventDefault()
          this.props.addLift({ name: this.state.liftName })
          this.setState({ liftName: '' })
        }}>
          <div className="input-wrapper">
            <label htmlFor="lift_name">New lift:</label>
            <input type="text" placeholder="e.g., Squat"
              value={ this.state.liftName }
              onChange={ (evt) => {
              this.setState({ liftName: evt.target.value });
              }}
            />
          </div>
          <div className="input-wrapper">
            <input type="submit" value="Create" className="button"/>
          </div>
        </form>
      
      </div>
    )
  }


}




