import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import UUID from 'uuid'
import Hoglist from './Hoglist'

class App extends Component {

  constructor() {
    super()
    this.state = {
      filteredhogs: hogs,
      hogs: hogs
    }
  }

  showDetails = (hog) => {
    let myhog = hogs.find(eachhog => {return eachhog.name === hog.target.id})
    return (
      <div>
        <p>Specialty: {myhog.specialty}</p>
        <p>Greased: {myhog.greased}</p>
        <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {myhog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>Highest Medal Achieved: {myhog['highest medal achieved']}</p>
      </div>
    )
  }

  filterMethod = (search) => {
    this.setState({
      filteredhogs: this.state.hogs.filter(hog => hog.name.toLowerCase().includes(search))
    })
  }

  sortNone = () => {
    this.setState({
      filteredhogs: this.state.hogs
    })
  }

  sortName = () => {
    let sortthesehogs = Array.from(this.state.hogs)
    this.setState({
      filteredhogs: sortthesehogs.sort(function(a, b) {
        var nameA = a.name.toLowerCase(); // ignore upper and lowercase
        var nameB = b.name.toLowerCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      })

    })
  }

  sortWeight = () => {
    let blah = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    let sortthesehogs = Array.from(this.state.hogs)
    this.setState({
      filteredhogs: sortthesehogs.sort(function(a,b) {
        return a[blah] - b[blah];
      })
    })
  }


  render() {

    return (
      <div className="App">
        < Nav />
      < Hoglist
      filteredhogs={this.state.filteredhogs}
      sortNone={this.sortNone}
      sortName={this.sortName}
      sortWeight={this.sortWeight}
      filterMethod={this.filterMethod}/>
      </div>
    )
  }
}

export default App;
