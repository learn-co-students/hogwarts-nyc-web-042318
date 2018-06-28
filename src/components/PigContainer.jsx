import React from 'react';
import hogs from '../porkers_data';
import Pig from './Pig'

class PigContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  

  // filteredHogs = () => {
  //   return hogs.filter( hog => hog.name.toLowerCase().includes(this.state.value.toLowerCase()) )
  // }
   
  render() {
      return (
        <div>          
          <form >
            <label>Search: 
              <input 
              type="text"
              value={this.props.value}
              onChange={this.props.handleChange}
              />
            </label>
            <button onClick={this.props.sortHandler}>Sort by Weight</button>
            <select onChange={this.props.greasedHandler}>
              <option value="all">All Hogs</option>
              <option value="true">Greased</option>
              <option value="false">Ungreased</option>
            </select>
          </form>
          <div className="ui grid container">
            { this.props.hogs.map( hog => { return <Pig  key={hog.id} pigDetails={hog} renderDetails={this.renderDetails} pigState={this.state}/> } ) }
          </div>
        </div>
      )
    }
}

export default PigContainer