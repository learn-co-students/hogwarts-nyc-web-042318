import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from './PigContainer'
const pigWeight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hogs: hogs, 
      value: '',
      sorted: null,
      greased: null,
      greasedHogs: null
    }
  }

  greasedHandler = (event) => {
    if (event.target.value === 'all') {
      this.setState({
        greased: null,
      })
    }

    else {
      this.setState({
        greased: true,
        greasedHogs: this.state.hogs.filter(hog => hog.greased.toString() === event.target.value)
      })
    }
  }

  handleChange = event => {
    
    this.setState({
      greased: null,
      value: event.target.value,
     
    }, () => {
      this.setState({  hogs: hogs.filter( hog => hog.name.toLowerCase().includes(this.state.value.toLowerCase()) ) })
    });
  }

  sortHandler = (event) => {
    event.preventDefault()

    if (this.state.sorted === null) {
      this.setState({
        hogs: this.state.hogs.sort( (a, b) => a[pigWeight] - b[pigWeight]),
        sorted: 'asc' 
      })
    }

    if (this.state.sorted === 'asc') {
      this.setState({
        hogs: this.state.hogs.sort( (a, b) => a[pigWeight] - b[pigWeight]).reverse(),
        sorted: 'desc'
      })
    }

    if (this.state.sorted === 'desc') {
      this.setState({
        hogs: this.state.hogs.sort( (a, b) => a[pigWeight] - b[pigWeight]),
        sorted: 'asc'
      })
    }
  } 

 

  
  render() {
    return (
      <div className="App">
          < Nav />
          <PigContainer 
            greasedHandler={this.greasedHandler} 
            hogs={ this.state.greased === true  ? this.state.greasedHogs : this.state.hogs} 
            value={this.state.value} 
            handleChange={this.handleChange} 
            sortHandler={this.sortHandler} 
          />
      </div>
    )
  }
}

export default App;
