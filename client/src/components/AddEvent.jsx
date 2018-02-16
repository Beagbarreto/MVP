import React from 'react';

class AddEvent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      day: '',
      title: '',
      hour: '',
      location: '',
      description: ''
    }
    this.handleDay = this.handleDay.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.handleHour = this.handleHour.bind(this)
    this.handleLocation = this.handleLocation.bind(this)
    this.handleDescription = this.handleDescription.bind(this)
    this.addEvent = this.addEvent.bind(this)
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
    handleHour(event){
      this.setState({
        hour: event.target.value
      })
    }
    handleLocation(event){
      this.setState({
        location: event.target.value
      })
    }
    handleDescription(event){
      this.setState({
        description: event.target.value
      })
    }

    addEvent(){
      this.props.addEventAct(this.state.date, this.state.title, this.state.hour, this.state.location, this.state.description);
      this.setState = {
        day: '',
        title: '',
        hour: '',
        location: '',
        description: ''
      }
    }

    render(){
      return(<div>
        day: <input value={this.state.day} onChange={this.handleDay}></input>
      <br />
        title: <input value={this.state.title} onChange={this.handleTitle}></input>
      <br />
        hour: <input value={this.state.hour} onChange={this.handleHour}></input>
      <br />
        location: <input value={this.state.location} onChange={this.handleLocation}></input>
      <br />
        description: <input value={this.state.description} onChange={this.handleDescription}></input>
      <br />
      <button onClick={this.addEvent}>Calender</button>

      </div>)
    }
}
export default AddEvent;
