import React, { Component } from 'react'

export default class Pig extends Component {
   constructor(props) {
       super(props);

       this.state = {
        specialty: null,
        medal: null,
        weight: null,
        greased: null,
      }
       

   }
    
   nameParser = () => {   
      const parsedName = this.props.pigDetails.name.toLowerCase().split(' ').join('_')
      return parsedName
    }

    renderDetails = (id) => {
      // const foundHog = hogs.find( hog => hog.id === id )
  
      this.setState({
        specialty: this.props.pigDetails.specialty,
        medal: this.props.pigDetails['highest medal achieved'],
        weight: this.props.pigDetails['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'],
        greased: this.props.pigDetails.greased
      })
    }
    


   

    render() {
    return (

        <div className="ui link cards">
          <div className="ui eight wide column ui card" onClick={ () => this.renderDetails(this.props.pigDetails.id)} >   
           <img src={require(`../hog-imgs/${this.nameParser()}.jpg`)} />
            Name: {this.props.pigDetails.name} <br/>
            Specialty: {this.state.specialty} <br/>
            Medal: {this.state.medal} <br/>
            Weight: {this.state.weight} <br/>
           </div>
        </div>
    )
  }
}
