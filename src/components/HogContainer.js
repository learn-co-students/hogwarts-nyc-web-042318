import React from 'react';
import Hog from './Hog'
import UUID from 'uuid'

class HogContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state={}
  }

  render() {
    let renderHogs = this.props.hogs.map(hog => {
      return <Hog key={hog.id}
      id={hog.id}
      name={hog.name}
      specialty={hog.specialty}
      greased={hog.greased}
      weight={hog.weight}
      medal={hog.medal}
      hideHog={this.props.hideHog}/>
    })
    return (
      <div>
        {renderHogs}
      </div>
    )
  }
}

export default HogContainer;
