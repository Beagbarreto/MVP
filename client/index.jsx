import React from 'react';
import ReactDom from 'react-dom';
import data from './data.js';
//import CalenderEvents from './components/CalenderEvents.jsx';
//import EventDetails from './components/EventDetails.jsx'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //event: []
    }
    //this.addEvent = this.addEvent.bind(this);
    //have to create this in components
    //this.getEvent = this.getEvent.bind(this);
  }
}


  componentDidMount(){

  }
  render(){

  }

ReactDOM.render(<App />, document.getElementById('app'));
