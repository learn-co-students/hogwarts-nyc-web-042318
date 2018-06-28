import React, { Component } from 'react'
import UUID from 'uuid'
import Hog from './Hog'

class Hoglist extends Component {

  state = {
    search: ""
  }

  handleChange = event => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.filterMethod(this.state.search.toLowerCase())
  }

  handleRadio = (event) => {
    if (event.target.id === "none") {
      this.props.sortNone()
    } else if (event.target.id === "name") {
      this.props.sortName()
    } else if (event.target.id === "weight") {
      this.props.sortWeight()
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.search}
            placeholder="filter by name"
            onChange={this.handleChange}
          />
        <input type="submit" value="Submit"/>
        </form>

        <fieldset>
          <legend>Sort by</legend>

          <div>
              <input onClick={this.handleRadio} type="radio" id="none" name="sort" />
              <label for="none">None</label>
          </div>

          <div>
              <input onClick={this.handleRadio} type="radio" id="name" name="sort" />
              <label for="name">Name</label>
          </div>

          <div>
              <input onClick={this.handleRadio} type="radio" id="weight" name="sort" />
              <label for="weight">Weight</label>
          </div>

        </fieldset>

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
