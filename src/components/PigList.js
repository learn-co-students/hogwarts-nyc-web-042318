import React, {Component} from 'react';
import PigCard from './PigCard';
import Piggy from './Piggy'

class PigList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedHogs: [],
      nameSortOn: false,
      weightSortOn: false,
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

  handleNameSort = () => {
    if (this.state.nameSortOn) {
      this.setState(
        {nameSortOn: false})
    } else {
      this.setState(
        {nameSortOn: true})
    }

  }

  handleWeightSort = () => {
    if (this.state.weightSortOn) {
      this.setState(
        {weightSortOn: false})
    } else {
      this.setState(
        {weightSortOn: true})
    }

  }

  generatePigs() {
    let newHogsArray;
    if (this.state.nameSortOn) {
      newHogsArray = this.props.hogs.sort((a, b) => a.name.localeCompare(b.name))
    } else if (this.state.weightSortOn) {
      newHogsArray = this.props.hogs.sort((a, b) => (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) - (b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']))
    }

    if (newHogsArray) {
      return newHogsArray.map(hog => {
        if (this.state.selectedHogs.includes(hog)) {
          return <Piggy hog={hog} selectPig={this.selectPig}/>
        }
        else {
          return <PigCard hog={hog} selectPig={this.selectPig} />
        }
      })
    } else {
      return this.props.hogs.map(hog => {
        if (this.state.selectedHogs.includes(hog)) {
          return <Piggy hog={hog} selectPig={this.selectPig}/>
        }
        else {
          return <PigCard hog={hog} selectPig={this.selectPig} />
        }
      })
    }
  }

  render() {
    return(
      <div className="ui grid container">
        <button onClick={this.handleNameSort}>Sort By Name</button>
        <button onClick={this.handleWeightSort}>Sort By Weight</button>
        <div></div>

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
