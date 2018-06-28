import React, {Component} from 'react';

class PigCard extends Component {
  constructor(props) {
    super(props);

  }

  nameFix = str => {
    let newStr = str.replace(/ /g, "_").toLowerCase();
    return newStr;
  };

  render() {
    return (
      <div className="ui card eight wide column" onClick={() => { this.props.selectPig(this.props.hog) }} >
        <div className="image">
         <img
              src={require(`../hog-imgs/${this.nameFix(this.props.hog.name)}.jpg`)}
              alt={this.props.hog.name}
            />
        </div>
        <div className="content">
          <a className="header">{this.props.hog.name} | {this.props.hog.specialty}</a>
          {/* <div className="meta">
            <span className="date">{this.props.hog.greased ? 'This pig is so greasy' : 'This pig is not greasy'}</span>
          </div> */}
          {/* <div className="description">
            Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
          </div> */}
        </div>
        {/* <div className="extra content">
          <a>
            <i className="user icon"></i>
            {this.props.hog['highest medal achieved']}
          </a>
        </div> */}
      </div>
    )
  }
}

export default PigCard;
