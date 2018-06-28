import React, {Component} from 'react';

class PigCard extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="ui card eight wide column">
        <div className="image">
          <img src="https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/pig-fence.adapt.945.1.jpg" alt="its a pig" />
        </div>
        <div className="content">
          <a className="header">{this.props.hog.name} | {this.props.hog.specialty}</a>
          <div className="meta">
            <span className="date">{this.props.hog.greased ? 'This pig is so greasy' : 'This pig is not greasy'}</span>
          </div>
          <div className="description">
            Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="user icon"></i>
            {this.props.hog['highest medal achieved']}
          </a>
        </div>
      </div>
    )
  }
}

export default PigCard;
