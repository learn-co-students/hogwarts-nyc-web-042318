import React, { Component } from 'react'
import UUID from 'uuid'


class Hog extends Component {

  constructor() {
    super()
    this.state = {
      clicked: false
    }
  }

  showDetails = () => {
    if (this.state.clicked === false) {
      this.setState(
        {clicked: true}
      )
    } else if (this.state.clicked === true) {
      this.setState(
        {clicked: false}
      )
    }
  }

  showStuff = () => {
    return (
      <div>
        <p>Specialty: {this.props.specialty}</p>
        <p>Greased: {this.props.greased.toString()}</p>
        <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.weight}</p>
        <p>Highest Medal Achieved: {this.props.medal}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="pigTile" key={UUID()}>
        <h3>{this.props.name}</h3>
        <img
          onClick={this.showDetails}
          id={this.props.name}
          src={require("../hog-imgs/" + this.props.name.toLowerCase().split(" ").join("_") + ".jpg")}/>
        <div>{(this.state.clicked===true)? this.showStuff() : null}</div>
      </div>
    )

  }
}

export default Hog;
