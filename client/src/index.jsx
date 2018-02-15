import React from 'react';
import ReactDOM from 'react-dom';
//import $ from 'jquery';
import data from './data.js';
import AddEvent from './components/AddEvent.jsx'
import ActList from './components/ActList.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      act: []
    }
  }

  updateCalender(){
    $.ajax({
      method: "POST",
      url:"/calender",
      contentType:'application/json',
      data: JSON.stringify({
        day: day,
        title: title,
        hour: hour,
        where: where,
        description: description
      })
    }).done(({actList})=> {
      this.setState({list: actList});
    })
  }
  render(){
    return(<div>
      <h1>Calender</h1>
      <AddEvent act={this.state.act}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
