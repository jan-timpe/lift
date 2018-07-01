import React, { Component } from 'react'
import '../style/Form.css'


export default class LiftResultForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weight: ''
    }
  }

  render() {
    return (
      <form onSubmit={ (event) => {
        event.preventDefault()
        let date = new Date()
        this.props.addLiftResult({
          liftId: this.props.liftId,
          weight: parseInt(this.state.weight),
          date: date.toLocaleDateString('en-US')
        })
        this.setState({ weight: '' })
      }}>

        <div className="input-wrapper">
          <label htmlFor="weight">Add result:</label>
          <input type="number"placeholder="e.g., 215"
            value={ this.state.weight }
            onChange={ (evt) => {
              this.setState({ weight: evt.target.value })
            }}
          />
        </div>
        <div className="input-wrapper">
          <input type="submit" value="Add" className="button"/>
        </div>
      </form>
    )
  }

}