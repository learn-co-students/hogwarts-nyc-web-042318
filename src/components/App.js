import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import Filter from './Filter'
import hogs from '../porkers_data';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedHogs: hogs,
      filteringBy: null,
      searchTerm: ''
    }
  }

  setSearchTerm = (event) => {
    console.log(`settingSearchTerm`, event.target.value)
    this.setState({
      searchTerm: event.target.value
    }, () => this.filterByName())
  }

  setFilter = (event) => {
    console.log(`event.target.value`, event.target.value)
    this.setState({
      filteringBy: event.target.value
    }, () => this.filterHogs())
  }

  filterByName = () => {
    console.log(this.state.searchTerm)
    let filteredHogs = hogs.filter(hog => hog.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    this.setState({
      selectedHogs: filteredHogs
    }, console.log(this.state.selectedHogs))
  }

  filterHogs = () => {
    console.log( `you're inside filterHogs`)
    let newHogs;

    switch (this.state.filteringBy) {
      case ('name'):
        newHogs = hogs.sort((a, b) => a.name.localeCompare(b.name))
        break;
      case ('weight'):
        newHogs = hogs.sort((a, b) => (a.weight - b.weight))
        break;
      case('greased'):
        newHogs = hogs.filter(hog => hog.greased === true)
        break;
    }
    this.setFilterState(newHogs)
  }

  setFilterState = (hogList) => {
    console.log( `you're inside filterHogs`)
    this.setState({
      selectedHogs: hogList
    }, () => console.log(`state set`, this.state.selectedHogs))
  }

  render() {
    return (
      <div className="App">
        < Nav />
        < Filter setFilter={this.setFilter} setSearchTerm={this.setSearchTerm} />
        < HogContainer hogs={this.state.selectedHogs} />
      </div>
    )
  }
}

export default App;
