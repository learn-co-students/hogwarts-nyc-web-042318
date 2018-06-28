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

      this.setState ({
        filteredhogs: this.state.hogs.filter(hog => hog.name.toLowerCase().includes(search))
      })
      console.log(this.state.filteredhogs)
    }

    filGrease = (search) => {
      this.setState ({
        filteredhogs: this.state.hogs.filter(hog => hog.greased.toString() == search)
      })
    }



    arrange = (value) => {

      if (value == "name") {
        this.setState ({
          filteredhogs: this.state.filteredhogs.sort(this.compare)
        })
      } else if (value == "weight") {
        this.setState ({
          filteredhogs: this.state.filteredhogs.sort(this.compareWeight)
        })
      }

    }

    compareWeight ( a, b ) {
      if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']){
        return 1;
      } else if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) {
        return -1;
      }
    
    }



    compare (a, b) {
      if (a.name > b.name) {
        return 1;
      } else if ( a.name < b.name) {
        return -1;
      }

    }




  render() {

    return (
      <div className="App">
        < Nav />
      < Hoglist filteredhogs={this.state.filteredhogs} filt={this.filterMethod} gree={this.filGrease} thingSort={this.arrange}/>
      </div>
    )
  }
}

export default App;
