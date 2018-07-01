import React from 'react';

class SearchBar extends React.Component {

  render(){
    return(
      <div>
        <form>
          <input type='text' placeholder='Search Hogs By Name' value={this.props.searchTerm} onChange={this.props.getSearchTerm}/>
        </form>
        <button onClick={this.props.sortWeight}>Sort By Weight</button>
        <button onClick={this.props.toggleGreased}>Greased?</button>
      </div>
    )
  }

}

export default SearchBar;
