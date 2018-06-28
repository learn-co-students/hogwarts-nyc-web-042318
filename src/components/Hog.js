import React from 'react';


class Hog extends React.Component {
  constructor() {
    super()

    this.state={
      clicked: false
    }
  }

  handleClick = (event) => {
    if (this.state.clicked === false) {
      this.setState({clicked: true})
    } else {
      this.setState({clicked: false})
    }
  }

  showDetails = () => {
    return(
      <div>
        <h4>Specialty: {this.props.specialty}</h4>
        <h4>Greased: {this.props.greased.toString()}</h4>
        <h4>Weight: {this.props.weight}</h4>
        <h4>Highest Medal: {this.props.medal}</h4>
        <button onClick={() => {this.props.hideHog(this.props.id)}}>Hide Me</button>
      </div>
    )

  }

  render() {
    let image = this.props.name.toLowerCase().split(' ').join('_')
    return (
      <div className="pigTile">
        <img onClick={this.handleClick} src={require(`../hog-imgs/${image}.jpg`)}></img>
        <h3>Name: {this.props.name}</h3>
        {(this.state.clicked) ? this.showDetails() : null}
      </div>
    )
  }
}

export default Hog;
