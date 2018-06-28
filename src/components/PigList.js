import React, {Component} from 'react';
import PigCard from './PigCard';
import Piggy from './Piggy'

class PigList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hogs: this.props.hogs,
      selectedHogs: [],
      nameSortOn: false,
      weightSortOn: false,
      greaseFilterOn: false,
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

  handleGreased = () => {
    if (this.state.greaseFilterOn) {
      this.setState(
        {greaseFilterOn: false})
    } else {
      this.setState(
        {greaseFilterOn: true})
    }
  }

  generatePigs() {
    // let newHogsArray;
    // if (this.state.nameSortOn) {
    //   newHogsArray = []
    //   newHogsArray = this.props.hogs.sort((a, b) => a.name.localeCompare(b.name))
    // } else if (this.state.weightSortOn) {
    //   newHogsArray = []
    //   newHogsArray =
    // }

    if (this.state.nameSortOn === true) {
      const pigsByName = this.props.hogs.sort((a, b) => a.name.localeCompare(b.name))

      return pigsByName.map(hog => {
        if (this.state.selectedHogs.includes(hog)) {
          return <Piggy hog={hog} selectPig={this.selectPig}/>
        }
        else {
          return <PigCard hog={hog} selectPig={this.selectPig} />
        }
      })
    } else if (this.state.weightSortOn === true) {
      const pigsByWeight = this.props.hogs.sort((a, b) => (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) - (b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']))

      return pigsByWeight.map(hog => {
        if (this.state.selectedHogs.includes(hog)) {
          return <Piggy hog={hog} selectPig={this.selectPig}/>
        }
        else {
          return <PigCard hog={hog} selectPig={this.selectPig} />
        }
      })
    } else if (this.state.greaseFilterOn === true) {
      const pigsToShow = this.props.hogs.filter(hog => hog.greased === true)
      return pigsToShow.map(hog => {
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
    console.log(this.state.greaseFilterOn)
    return(
      <div>
        <button onClick={this.handleNameSort}>{this.state.nameSortOn ? "Reset to Default Order" : "Sort By Name"}</button>
        <button onClick={this.handleWeightSort}>{this.state.weightSortOn ? "Reset to Default Order" : "Sort By Weight"}</button>
        <button onClick={this.handleGreased}>{this.state.greaseFilterOn ? "Show All Pigs" : "Show Greasy Pigs"}</button>

        <br /><br /><br /><br />
      <div className="ui grid container">
        {this.generatePigs()}
      </div>

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
