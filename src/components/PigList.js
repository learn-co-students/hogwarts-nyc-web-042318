import React, {Component} from 'react';
import PigCard from './PigCard';
import Piggy from './Piggy'

class PigList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedHogs: []
    }
  }

  selectPig = (pigObject) => {
    if (!this.state.selectedHogs.includes(pigObject)) {
      this.setState({
        selectedHogs: [...this.state.selectedHogs, pigObject]
      })
    } else {
      // if (this.state.selectedHogs.includes(pigObject)) {

      this.setState({
      selectedHogs: this.state.selectedHogs.filter(hog => hog !== pigObject)
      })
      }
    // }
  }

  generatePigs() {
    return this.props.hogs.map(hog => {
      if (this.state.selectedHogs.includes(hog)) {
        return <Piggy hog={hog} selectPig={this.selectPig}/>
      }
      else {
        return <PigCard hog={hog} selectPig={this.selectPig} />

      }
    })
  }

  render() {
    console.log(this.generatePigs())
    return(
      <div className="ui grid container">
        {this.generatePigs()}

      {/* <button onClick={this.setState({
        selectedHogs: this.props.hogs.sort(hog => hog.name)
        })}>Sort by Name</button>
      <button onClick={this.setState({
        selectedHogs: this.props.hogs.sort(hog => hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
        })}>Sort by Weight</button> */}
        </div>
    )
  }

}

export default PigList;
