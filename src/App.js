import React, { Component } from 'react';
import './App.css';
import Lift from './components/Lift';
import update from 'react-addons-update';

class App extends Component {

  constructor(props) {
    super(props)
  
    let accountCode = localStorage.getItem('account_code')
    let liftsJson = localStorage.getItem('lifts')

    this.state = {
      accountCode: accountCode ? accountCode : null,
      lifts: liftsJson ? JSON.parse(liftsJson): [],
      lift_name: null
    }
  }


  createLift() {
    this.state.lifts.push({
      name: this.state.lift_name,
      history: [],
      max: null
    })
    this.setState({ lift_name: '' })
    localStorage.setItem('lifts', JSON.stringify(this.state.lifts))
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

export default App;
