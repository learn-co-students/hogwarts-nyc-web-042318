import React, { Component } from 'react'
import UUID from 'uuid'
import Hog from './Hog'

class Hoglist extends Component {


state = {
  search: '',
  value: null,
  sortThing: null,
}

  changeSearch = (event) => {
    this.setState ({
      search: event.target.value
    })

  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.filt(this.state.search)

  }


  handleHitIt = (event) => {
    event.preventDefault();
    this.props.gree(this.state.value);

  }


  changeValue = (event) => {
    this.setState ({
      value: event.target.value
    })
  }


  changeList = (event) => {

    this.setState ({
      sortThing: event.target.value
    })
  }

  doSomeFunction = (event) => {
    event.preventDefault();
    this.props.thingSort(this.state.sortThing)
  }


  render() {
    return (
      <div>

        <form onSubmit={this.handleHitIt}>
          <p>Filter the thing by Grease:</p>
          <div className="radio" onChange={this.changeValue}>
            <input type="radio" name="radio" value="true"  />
              <label for="greased">True</label>

              <input type="radio" name="radio" value="false"/>
                <label for="greased">False</label>
              </div>
              <button type="submit">Hit It</button>
          </form>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.search}
            placeholder=""
            onChange={this.changeSearch}
            name="search"
          />
        <input type="submit" value="Filter By letters in Name" />
        </form>

        <form onSubmit={this.doSomeFunction}>
          <p>Filter By Name or Weight on the List:</p>
          <div className="radio" onChange={this.changeList}>
            <input type="radio" name="radio" value="name"  />
              <label for="name">Sort By Name</label>

              <input type="radio" name="radio" value="weight"/>
                <label for="weight">Sort By Weight</label>
              </div>
              <button type="submit">Just Make your Choice</button>
          </form>








      {this.props.filteredhogs.map(hog => {
        return (
          < Hog
            key={UUID()}
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
            medal={hog['highest medal achieved']} />
        )
      })}

      </div>
    )
  }
}

export default Hoglist;
