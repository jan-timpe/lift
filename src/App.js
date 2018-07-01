import React, { Component } from 'react'
import './App.css'
import LiftListContainer from './components/LiftListContainer'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      lift_name: ''
    }
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
            <LiftListContainer />
          </div>


          </div>
      );
  }
}
