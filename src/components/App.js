import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigList from './PigList'
import hogs from '../porkers_data';
import Piggy from './Piggy'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
        <PigList hogs={hogs} />
        <Piggy />
      </div>
    )
  }
}

export default App;
