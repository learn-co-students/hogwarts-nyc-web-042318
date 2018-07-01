import React from 'react';

class Hog extends React.Component {
  constructor() {
    super()

    this.state = {
      detailsDisplayed: false
    }
  }

  onceClicked = () => {
    if (this.state.detailsDisplayed === false) {
      this.setState({
        detailsDisplayed: true
      })
    } else {
      this.setState({
        detailsDisplayed: false
      })
    }
  }

  displayDetails = () => {
    return (
      <div>
        <h4>{this.props.hog.weight}</h4>
        <h5>{this.props.hog.specialty}</h5>
        <h6> {(this.props.hog.greased) ? "greasy" : "not greasy"} | <span className="achievementText">{this.props.hog.medal}</span></h6>
      </div>
    )
  }

  render() {
    let image = this.props.hog.name.toLowerCase().split(' ').join('_')

    return (
      <div className="pigTile" onClick={this.onceClicked}>
        <img src={require(`../hog-imgs/${image}.jpg`)} />
        <h3 className="hoggyText">{this.props.hog.name}</h3>
        {(this.state.detailsDisplayed) ? this.displayDetails() : null}
      </div>
    )
  }

}

export default Hog;
