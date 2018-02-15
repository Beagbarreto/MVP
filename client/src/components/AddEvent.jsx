import React from 'react';

class AddEvent extends React.Component{
  constructor(props){
    super(props);
    this.setState = {
      day: '',
      title: '',
      time: '',
      where: '',
      description: ''
    }
    this.handleday = this.handleDay.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.handleTime = this.handleTime.bind(this)
    this.handleWehre = this.handleWhere.bind(this)
    this.handleDescription = this.handleDescription.bind(this)
    this.addToCalender = this.addToCalender.bind(this)
  }
    handleDay(event){
      this.setState({
        day: event.target.value
      })
    }
    handleTitle(event){
      this.setState({
        title: event.target.value
      })
    }
    handleTime(event){
      this.setState({
        time: event.target.value
      })
    }
    handleWhere(event){
      this.setState({
        where: event.target.value
      })
    }
    handleDescription(event){
      this.setState({
        description: event.target.value
      })
    }

    addToCalender(){
      this.props.addToCalenderAct(this.state.date, this.state.title, this.state.time, this.state.where, this.stte.description);
      this.setState = {
        day: '',
        title: '',
        time: '',
        where: '',
        description: ''
      }
    }

    render(){
      return(<div>
        day: <input value={this.state.day} onChange={this.handleDay}></input>
      <br />
        title: <input value={this.state.title} onChange={this.handleTitle}></input>
      <br />
        time: <input value={this.state.time} onChange={this.handleTime}></input>
      <br />
        where: <input value={this.state.where} onChange={this.handleWhere}></input>
      <br />
        description: <input value={this.state.description} onChange={this.handleDescription}></input>
      <button onClick={this.addToCalender}>Add to Calender</button>

      </div>)
    }
}
export default AddEvent;
