import React from 'react';
import ReactDom from 'react-dom';
//import $ from 'jquery';
import data from './data.js';
//import CalenderEvents from './components/CalenderEvents.jsx';
import AddToCalender from './components/AddToCalender.jsx'
import ActList from './components/ActList.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      act: []
    }
    this.addToCalender = this.addToCalender.bind(this);
    this.getAct = this.getAct.bind(this);
  }

  componentDidMount(){
  /*  $.ajax({

    })*/
  }
  render(){
    return(<div>
      <h1>Calender</h1>
      <Calender act={this.state.event}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
