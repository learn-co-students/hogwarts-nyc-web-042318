import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import SearchBar from './SearchBar'
import UUID from 'uuid'

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      filteredHogs: hogs,
      sorted: false,
      greasedActive: false
    }
  }

  // componentDidMount(){
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(json =>
  //     this.setState({
  //       pigs: json
  //     }))
  // }

  hideHog = (id) => {
    let hogToRemove = this.state.filteredHogs.find(hog => hog.id === id)
    let index = this.state.filteredHogs.indexOf(hogToRemove);
    this.state.filteredHogs.splice(index, 1)
    this.setState({
      filteredHogs: this.state.filteredHogs
    })
  }

  toggleGreased = () => {
    if (this.state.greasedActive === false){
    let greasedHogs = hogs.filter(hog => {
      return hog.greased === true
    })
    this.setState({
      filteredHogs: greasedHogs,
      greasedActive: true
    })
  } else {
    this.setState({
      filteredHogs: hogs,
      greasedActive: false
    })
  }
  }

  getSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    }, () => {this.filteredTheHogsByName()})
  }

  filteredTheHogsByName = () => {
    let nameHogsSorted = hogs.filter(hog => hog.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    this.setState({
      filteredHogs: nameHogsSorted
    })
    console.log('filtered hogs search term', this.state.searchTerm)
  }

  sortWeight = (e) => {
    // e.preventDefault()
      if (this.state.sorted === false){
      let weightHogsSorted = [...hogs].sort((a, b) => {return a.weight - b.weight})
      this.setState({
        filteredHogs: weightHogsSorted,
        sorted: true
      })
    } else {

      this.setState({
        filteredHogs: hogs,
        sorted: false
      })
    }
  }

  render() {
    return (
      <div className="App">
        < Nav />
      < SearchBar toggleGreased={this.toggleGreased} getSearchTerm={this.getSearchTerm} searchTerm={this.state.searchTerm} sortWeight={this.sortWeight}/>
    < HogContainer
    hogs={this.state.filteredHogs}
    hideHog={this.hideHog}
    />
      </div>
    )
  }
}

export default App;
