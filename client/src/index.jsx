import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import data from './data.js';
import AddEvent from './components/AddEvent.jsx'
import ActList from './components/ActList.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      act: []
    }
    this.getActivities = this.getActivities.bind(this);
  }

  updateCalender(){
    $.ajax({
      method: "POST",
      url:"/activities",
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
  getActivities() {
    $.ajax({
      url: '/activities',
      method: 'GET',
      success: (results) => {
        this.setState({list: results});
      },
      error: (xhr, err) => {
        console.log('err', err);
      }
    })
  }

  componentDidMount() {
    this.getactivities();
  }

  render(){
    return(<div>
      <h1>Activities List</h1>
      <AddEvent addAct={this.state.act}/>
      <ActList list={this.state.list}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
