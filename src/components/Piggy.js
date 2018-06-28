import React from "react";

function nameFix(str) {
  let newStr = str.replace(/ /g, "_").toLowerCase();
  return newStr;
};

const Piggy = ({ hog, selectPig }) => {
  if (!hog) {
    return <div>Click a pig's card to display its full information.</div>
  }

      console.log(hog)
  return (

      <div className="ui card eight wide column" onClick={() => selectPig(hog) }>
          <div className="image">
            <img
              src={require(`../hog-imgs/${nameFix(hog.name)}.jpg`)}
              alt={hog.name}
            />
        </div>
        <div className="content">
          <a className="header">{hog.name} | {hog.specialty}</a>
          <div className="meta">
            <span className="date">{hog.greased ? 'This pig is so greasy' : 'This pig is not greasy'}</span>
          </div>
          <div className="description">
            Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="user icon"></i>
            Highest medal won: {hog['highest medal achieved']}
          </a>
        </div>
      </div>
  )
}

export default Piggy;
