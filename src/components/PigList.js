import React, {Component} from 'react';
import PigCard from './PigCard';

class PigList extends Component {
  constructor(props) {
    super(props);

  }

  generatePigs() {
    return this.props.hogs.map(hog => {
      return <PigCard hog={hog} />
    })
  }

  render() {
    console.log(this.generatePigs())
    return(
      <div className="ui grid container">
        {this.generatePigs()}
      </div>)
  }

}

export default PigList;
