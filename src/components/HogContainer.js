import React from 'react';
import Hog from './Hog'

class HogContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let allOfTheHogs = this.props.hogs.map(hog => <Hog hog={hog} />)

    return(
      <div>
        {allOfTheHogs}
      </div>
    )
  }

}

export default HogContainer;
