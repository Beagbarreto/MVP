import React from 'react';
import ReactDom from 'react-dom';
//import $ from 'jquery';
import data from './data.js';
//import CalenderEvents from './components/CalenderEvents.jsx';
//import EventDetails from './components/EventDetails.jsx'
//import List from './components/List.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //event: [] items, list or whatever I'll use here
    }
    //this.addEvent = this.addEvent.bind(this);
    //have to create this in components
    //this.getEvent = this.getEvent.bind(this);
  }

  componentDidMount(){
  /*  $.ajax({

    })*/
  }
  render(){
    return(<div>
      <h1>Calender</h1>
      <Calender events={this.state.event}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
