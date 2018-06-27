import React, { Component } from 'react';
import './App.css';
import Lift from './components/Lift';
import update from 'react-addons-update';
import { connect } from "react-redux";
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

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      lifts: props.lifts,
      lift_name: ''
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      lifts: props.lifts
    })
  }


  createLift() {
    this.props.addLift({
      name: this.state.lift_name
    })
    this.setState({ lift_name: '' })
    // localStorage.setItem('lifts', JSON.stringify(this.state.lifts))
  }

  addLiftResult(liftIndex, weight) {
    let item = this.state.lifts[liftIndex]
    console.log(liftIndex)
    console.log(item);

    let date = new Date()
    let result = {
      weight: weight,
      date: date.toLocaleDateString("en-US")
    }

    item.history.push(result)

    let max = result
    for(var i = 0; i < item.history.length; i++) {
      let r = item.history[i]
      if(r.weight > max.weight) {
        max = r
      }
    }
    item.max = max

    this.setState({
      lifts: update(this.state.lifts, {liftIndex: {$set: item}})
    })

    // this.state.lifts[liftIndex] = item

    localStorage.setItem('lifts', JSON.stringify(this.state.lifts))
  }

  render() {
      return (
        <div className="App">

          <div className="content-header">
            <h1>lift</h1>
            <br/><br/>
            <p>A progressive web app created by <a href="https://jantimpe.com/" target="_blank" rel="noopener noreferrer">Jan Timpe</a></p>
          </div>


          <div className="content-body">

            <form onSubmit={ (event) => {
              event.preventDefault()
              this.createLift()
            }}>
              <div className="input-wrapper">
                <label htmlFor="lift_name">New lift:</label>
                <input type="text" name="lift_name" id="lift_name" value={ this.state.lift_name } onChange={ (evt) => {
                  this.setState({ lift_name: evt.target.value });
                }}/>
              </div>
              <div className="input-wrapper">
                <input type="submit" value="Create" className="button"/>
              </div>
            </form>


            { this.state.lifts.map( (lift, i) => {
              return (
                <Lift lift={ lift } key={ i } addResultCallback={ (liftIndex, weight) => { this.addLiftResult(liftIndex, weight) }} liftIndex={ i }/>
              );
            })}
          </div>


          </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
